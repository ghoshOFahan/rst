"use client";
import socket from "../lib/socket";
import WaitingLobby from "../components/WaitingLobby";
import { userGamestore } from "../store/userGamestore";
import { useEffect } from "react";
export default function RoomPage() {
  const { gameState, setGameState } = userGamestore();
  const players = gameState?.players ?? null;
  useEffect(() => {
    socket.on("gameStateUpdate", (state) => setGameState(state));
    if (gameState == null) {
      const socketId = localStorage.getItem("lastSocketid");
      if (socketId) {
        socket.emit("reconnectRoom", socketId);
      }
    }
    return;
  }, [gameState, setGameState]);
  return (
    <div className="min-h-screen flex items-center justify-center text-(--color-fg)">
      {
        <h1>
          <WaitingLobby />
          {!players ? (
            <p>waiting for the gameState...</p>
          ) : (
            players.map((value) => {
              return <p key={value.username}>{value.username}</p>;
            })
          )}
        </h1>
      }
    </div>
  );
}
