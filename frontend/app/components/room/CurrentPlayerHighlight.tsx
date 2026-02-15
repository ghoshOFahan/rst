"use client";

import { userGamestore } from "@/app/store/userGamestore";

export default function CurrentPlayerHighlight() {
  const gameState = userGamestore((s) => s.gameState);

  if (!gameState || !gameState.players || gameState.players.length === 0)
    return null;

  const currentPlayerId = gameState?.currentPlayerId;
  const players = gameState.players;

  const currentPlayer = players.find((p) => p.id === currentPlayerId);

  return (
    <div className="text-center mb-4">
      <p className="text-comment">Current Turn:</p>
      <h2 className="text-xl md:text-3xl font-bold text-purple text-center">
        {currentPlayer?.username ?? "Waiting..."}
      </h2>
    </div>
  );
}
