import { pgTable as table, primaryKey } from "drizzle-orm/pg-core";
import * as t from "drizzle-orm/pg-core";

export const users = table("users", {
  id: t.integer().primaryKey().generatedAlwaysAsIdentity(),
  name: t.varchar({ length: 256 }),
  email: t.varchar().notNull().unique(),
  googleId: t.varchar().unique(),
  createdAt: t.timestamp().defaultNow().notNull(),
});
export const sessions = table("sessions", {
  id: t.varchar().primaryKey(),
  userId: t
    .integer()
    .references(() => users.id, { onDelete: "cascade" })
    .notNull(),
  expiresAt: t.timestamp().notNull(),
});
export const topics = table("topics", {
  id: t.integer().primaryKey().generatedAlwaysAsIdentity(),
  name: t.varchar({ length: 256 }).notNull().unique(),
  embeddingVector: t.vector({ dimensions: 768 }).notNull(),
  createdAt: t.timestamp().defaultNow().notNull(),
});
export const topicAnchors = table(
  "topicAnchors",
  {
    userId: t
      .integer()
      .references(() => users.id, { onDelete: "cascade" })
      .notNull(),
    topicId: t
      .integer()
      .references(() => topics.id, { onDelete: "cascade" })
      .notNull(),
    currentScore: t.real(),
  },
  (table) => [primaryKey({ columns: [table.userId, table.topicId] })],
);
