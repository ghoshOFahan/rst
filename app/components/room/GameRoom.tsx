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
      <main className="flex flex-1 flex-col md:flex-row p-4 md:p-8 gap-6 md:gap-8">
        <aside className="w-full md:w-[300px] flex flex-col gap-4 md:gap-6 order-2 md:order-1">
          <PlayerList />
          <WordHistory />
        </aside>

        <section className="flex-1 flex flex-col justify-center items-center bg-line rounded-lg p-4 md:p-8 shadow-lg order-1 md:order-2">
          <CurrentPlayerHighlight />

          <h1 className="text-3xl md:text-6xl font-bold text-fg tracking-wider mt-4 md:mt-6 text-center">
            get set rst
          </h1>

          <GameInput />
        </section>
      </main>
    </div>
  );
}
