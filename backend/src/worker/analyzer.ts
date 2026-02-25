import { Worker, Job } from "bullmq";
import { Redis } from "ioredis";
import { db } from "../db/db.js";
import { topicAnchors, topics } from "../db/schema.js";
import { eq, and, sql } from "drizzle-orm";
import { embedWord, cosineSimilarity } from "../ai/embeddingJudge.js";
import type { GameState } from "../types/game.js";

const redisConnection = new Redis(process.env.REDIS_URL as string, {
  maxRetriesPerRequest: null,
  enableReadyCheck: false, // avoid version warnings
  lazyConnect: true,
  showFriendlyErrorStack: true,
});

export const analyticsWorker = new Worker(
  "identity-analyzer",
  async (job: Job<{ gameState: GameState }>) => {
    const { gameState } = job.data;
    const { wordHistory, players } = gameState;

    if (!wordHistory || wordHistory.length === 0) return;

    //Vectorize all words played in the match
    const wordVectors: number[][] = [];
    for (const word of wordHistory) {
      try {
        const vec = await embedWord(word);
        wordVectors.push(vec);
      } catch (e) {
        console.error("Failed to embed word:", word, e);
        wordVectors.push([]);
      }
    }
    //Process Gravity of each player
    for (const player of players) {
      // Assuming clientId from Socket is the NextAuth Database User ID
      const userId = parseInt(player.clientId, 10);
      if (isNaN(userId)) continue;

      // Fetch their 5 anchors
      const userAnchors = await db
        .select({
          topicId: topicAnchors.topicId,
          vector: topics.embeddingVector,
          name: topics.name,
        })
        .from(topicAnchors)
        .innerJoin(topics, eq(topicAnchors.topicId, topics.id))
        .where(eq(topicAnchors.userId, userId));

      if (userAnchors.length === 0) continue;

      // HashMap to track points gained in this specific match
      const scoreUpdates: Record<number, number> = {};
      userAnchors.forEach((a) => (scoreUpdates[a.topicId] = 0));

      // Measure Gravity
      for (let i = 0; i < wordHistory.length; i++) {
        const wordVec = wordVectors[i];
        if (!wordVec || wordVec.length === 0) continue;

        let bestTopicId = -1;
        let highestSim = -1;

        // Compare word vector to the 5 anchors
        for (const anchor of userAnchors) {
          if (!anchor.vector || anchor.vector.length === 0) continue;
          const sim = cosineSimilarity(wordVec, anchor.vector);
          if (sim > highestSim) {
            highestSim = sim;
            bestTopicId = anchor.topicId;
          }
        }

        // Only award points if it's somewhat related
        if (highestSim > 0.35 && bestTopicId !== -1) {
          scoreUpdates[bestTopicId] =
            (scoreUpdates[bestTopicId] ?? 0) + highestSim * 10;
        }
      }

      // 3. Update the Database using Drizzle's sql template for incrementing
      for (const anchor of userAnchors) {
        const pointsToAdd = scoreUpdates[anchor.topicId];
        if (pointsToAdd && pointsToAdd > 0) {
          await db
            .update(topicAnchors)
            .set({
              currentScore: sql`${topicAnchors.currentScore} + ${pointsToAdd}`,
            })
            .where(
              and(
                eq(topicAnchors.userId, userId),
                eq(topicAnchors.topicId, anchor.topicId),
              ),
            );
        }
      }
    }
  },
  {
    connection: redisConnection,
    autorun: true,
    concurrency: 1,
  },
);

analyticsWorker.on("completed", (job) => {
  console.log(
    `Gravity calculated & DB updated for room ${job.data.gameState.roomId}`,
  );
});

analyticsWorker.on("failed", (job, err) => {
  console.error(`Analyzer Job failed:`, err);
});
