"use client";

import { useState } from "react";
import { userGamestore } from "@/app/store/userGamestore";
import socket from "@/app/lib/socket";

export default function GameInput() {
  const [value, setValue] = useState("");
  const gameState = userGamestore((s) => s.gameState);
  const mySocketId = socket?.id;

  const currentPlayerId = gameState?.currentPlayerId;
  const isMyTurn =
    currentPlayerId && mySocketId ? currentPlayerId === mySocketId : false;

  const isAiThinking = gameState?.isAiThinking ?? false;

  const disabled = !isMyTurn || isAiThinking;

  const handleSubmit = () => {
    if (!value.trim() || disabled || !gameState) return;

    socket?.emit("submitWord", {
      roomId: gameState.roomId,
      word: value.trim(),
      playerId: mySocketId,
    });

    setValue("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSubmit();
  };

  return (
    <div className="mt-8 flex gap-3">
      <input
        className={`border border-comment/50 rounded-lg bg-line px-3 py-2 text-fg w-64 focus:outline-none focus:border-purple transition-colors ${
          disabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
        placeholder={
          isAiThinking
            ? "AI is judging..."
            : !isMyTurn
            ? "Waiting for other player..."
            : "Type your word..."
        }
        disabled={disabled}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        autoFocus
      />

      <button
        onClick={handleSubmit}
        className={`px-4 py-2 rounded-lg font-semibold transition-all ${
          disabled
            ? "bg-comment/20 text-comment cursor-not-allowed"
            : "bg-purple hover:bg-purple/80 text-white cursor-pointer"
        }`}
        disabled={disabled}
      >
        Submit
      </button>
    </div>
  );
}
