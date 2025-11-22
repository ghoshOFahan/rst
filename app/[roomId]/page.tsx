"use client";
import socket from "../lib/socket";
import WaitingLobby from "../components/WaitingLobby";
import { userGamestore } from "../store/userGamestore";
import { useEffect } from "react";
import GameRoom from "../components/room/GameRoom";
import type { GameState } from "../types/game";
export default function RoomPage() {
  const { gameState, setGameState } = userGamestore();
  useEffect(() => {
    const handleGameStateUpdate = (state: GameState) => {
      setGameState(state);
      localStorage.setItem("lastRoomId", state.roomId);
      if (socket && socket.id) {
        localStorage.setItem("lastSocketId", socket.id);
      }
    };

    socket.on("gameStateUpdate", handleGameStateUpdate);
    socket.on("gameError", (err) => console.error("Game error:", err));

    return () => {
      socket.off("gameStateUpdate", handleGameStateUpdate);
      socket.off("gameError");
    };
  }, [setGameState]);

  useEffect(() => {
    const lastSocketId = localStorage.getItem("lastSocketId");
    const lastRoomId = localStorage.getItem("lastRoomId");

    // reconnect only if we have no gameState and have saved info
    if (!gameState && lastSocketId && lastRoomId) {
      console.log("Attempting reconnection...");
      socket.emit("reconnectRoom", lastSocketId);
    }
  }, [gameState]);

  if (!gameState)
    return (
      <div className="min-h-screen flex items-center justify-center text-(--color-fg)">
        Loading gamestate ...
      </div>
    );
  switch (gameState.status) {
    case "LOBBY":
      return (
        <WaitingLobby
          players={gameState.players}
          roomId={gameState.roomId}
          maxPlayers={gameState.maxPlayers}
        />
      );
    case "INGAME":
      return <GameRoom />;
    case "FINISHED":
      return <div>Game is finished!!</div>;
    default:
      return <div>Unknown game status!</div>;
  }
}
