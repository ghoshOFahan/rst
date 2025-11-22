"use client";

import { userGamestore } from "@/app/store/userGamestore";
import PlayerList from "./PlayerList";
import CurrentPlayerHighlight from "./CurrentPlayerHighlight";
import WordHistory from "./WordHistory";
import GameInput from "./GameInput";

export default function GameRoom() {
  const gameState = userGamestore((s) => s.gameState);

  if (!gameState)
    return (
      <div className="text-center p-10 text-fg">
        <p>Loading room...</p>
      </div>
    );

  const { roomId } = gameState;

  return (
    <div className="flex flex-col min-h-screen w-full text-fg">
      <main className="flex flex-1 p-8 gap-8">
        <aside className="shrink-0 w-[300px] flex flex-col gap-6">
          <PlayerList />
          <WordHistory />
        </aside>

        <section className="flex-1 flex flex-col justify-center items-center bg-line rounded-lg p-8 shadow-lg">
          <CurrentPlayerHighlight />

          <h1 className="text-6xl font-bold text-fg tracking-wider mt-6">
            Word Chain Game
          </h1>

          <GameInput />
        </section>
      </main>

      <div className="fixed bottom-6 left-6 bg-line text-fg font-bold w-10 h-10 flex items-center justify-center rounded-full border border-comment/50">
        {roomId.slice(0, 1).toUpperCase()}
      </div>
    </div>
  );
}
