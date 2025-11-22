"use client";
import { UserCircle } from "lucide-react";
import { userGamestore } from "@/app/store/userGamestore";

export default function PlayerList() {
  const players = userGamestore((s) => s.gameState?.players ?? []);

  return (
    <div className="bg-line rounded-lg p-6 shadow-lg">
      <h3 className="text-xl font-semibold text-fg border-b border-comment/50 pb-2">
        Players
      </h3>

      <ul className="list-none p-0 m-0 flex flex-col gap-3 mt-4">
        {players.map((p, idx) => (
          <li key={p.id} className="flex items-center gap-3 text-base">
            <span>{idx + 1}.</span>
            <UserCircle className="text-comment w-6 h-6" />
            <span className="text-fg">{p.username}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
