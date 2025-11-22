"use client";

import { userGamestore } from "@/app/store/userGamestore";

export default function WordHistory() {
  const gameState = userGamestore((s) => s.gameState);
  const history = gameState?.wordHistory ?? [];

  return (
    <div className="bg-line rounded-lg p-6 shadow-lg">
      <h3 className="text-xl font-semibold text-fg border-b border-comment/50 pb-2">
        Word History
      </h3>

      <ul className="list-none p-0 m-0 max-h-[200px] overflow-y-auto text-comment mt-4">
        {history.length === 0 && (
          <li className="italic text-comment">No words yet</li>
        )}

        {history.map((word: string, index: number) => (
          <li key={index} className="py-1 font-mono">
            {word.toUpperCase()}
          </li>
        ))}
      </ul>
    </div>
  );
}
