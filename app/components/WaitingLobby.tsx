"use client";
import { useState } from "react";
import { Copy } from "lucide-react";
import type { GameState } from "../types/game";
type WaitingLobbyProps = {
  players: GameState["players"];
  roomId: string;
  maxPlayers: number;
};

export default function WaitingLobby({
  players,
  roomId,
  maxPlayers,
}: WaitingLobbyProps) {
  const playerCount = players.length;
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const inviteLink = `${window.location.origin}/?room=${roomId}`;
    try {
      await navigator.clipboard.writeText(inviteLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
      // Fallback: show error to user
      alert("Failed to copy invite link");
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-(--color-fg)">
      <div className="bg-(--color-bg)/60 backdrop-blur-lg border border-(--color-line) rounded-2xl shadow-lg p-6 w-[90%] max-w-md">
        <h2 className="text-xl font-semibold mb-4 text-center text-(--color-purple)">
          Players in Room
        </h2>
        {/* Player Count Indicator */}
        <div className="mb-4">
          {/* Text Indicator */}
          <div className="flex justify-between text-sm mb-1">
            <span className="text-(--color-fg)">
              Players: {playerCount} / {maxPlayers}
            </span>
          </div>
          {/* Progress Bar */}
          <div className="w-full bg-(--color-line) rounded-full h-2.5">
            <div
              className="bg-(--color-purple) h-2.5 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${(playerCount / maxPlayers) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="border border-(--color-line) rounded-lg p-3 mb-4 max-h-64 overflow-y-auto">
          {players.length > 0 ? (
            players.map((val) => (
              <p
                key={val.id}
                className="py-1 px-2 text-center text-(--color-fg) border-b border-(--color-line) last:border-none"
              >
                {val.username}
              </p>
            ))
          ) : (
            <p className="text-center text-(--color-comment)">
              Waiting for players...
            </p>
          )}
        </div>

        <button
          onClick={handleCopy}
          className="flex items-center justify-center gap-2 w-full py-2 rounded-lg bg-(--color-purple) hover:bg-(--color-pink) text-white font-medium transition-all duration-200"
        >
          <Copy className="w-4 h-4" />
          {copied ? "Copied!" : "Copy Invite Link"}
        </button>
      </div>
    </div>
  );
}
