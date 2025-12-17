"use client";

import { useState } from "react";
import { userGamestore } from "@/app/store/userGamestore";
import socket from "@/app/lib/socket";
const getClientId = () => {
  let id = localStorage.getItem("clientId");
  if (!id) {
    id = `${Date.now()}-${Math.random().toString(36).slice(2, 11)}`;
    localStorage.setItem("clientId", id);
  }
  return id;
};
export default function GameInput() {
  const [value, setValue] = useState("");
  const gameState = userGamestore((s) => s.gameState);
  const myClientId = getClientId();

  const currentPlayerId = gameState?.currentPlayerId;
  const isMyTurn =
    currentPlayerId && myClientId ? currentPlayerId === myClientId : false;

  const isAiThinking = gameState?.isAiThinking ?? false;

  const disabled = !isMyTurn || isAiThinking;
  const wordCheck = (word: string) => {
    word = word.trim().toLowerCase();
    const hasTripleRepeat = /(.)\1{2,}/.test(word);
    const hasNoVowels = !/[aeiou]/i.test(word);
    if (
      word.length > 15 ||
      word.length < 3 ||
      !/^[A-Za-z]+$/.test(word) ||
      hasTripleRepeat ||
      hasNoVowels
    ) {
      return false;
    }
    return true;
  };
  const dictCheck = async (word: string) => {
    word = word.trim().toLowerCase();
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    const response = await fetch(url);
    if (!response.ok) {
      return false;
    }
    return true;
  };
  const handleSubmit = async () => {
    if (!value.trim() || disabled || !gameState) return;
    if (!wordCheck(value)) {
      alert("Invalid word format");
      return;
    }
    const exists = await dictCheck(value);
    if (!exists) {
      alert("Word not found in dictionary");
      return;
    }
    socket?.emit("submitWord", {
      roomId: gameState.roomId,
      word: value.trim(),
      playerId: getClientId(),
    });

    setValue("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSubmit();
  };
  return (
    <div className="mt-6 flex flex-col sm:flex-row gap-3 w-full max-w-md">
      <input
        className={`border border-comment/50 rounded-lg bg-line px-3 py-2 text-fg w-full focus:outline-none focus:border-purple transition-colors ${
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
