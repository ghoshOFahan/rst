"use client";
import socket from "../lib/socket";
import WaitingLobby from "../components/WaitingLobby";
import { userGamestore } from "../store/userGamestore";
import { useEffect } from "react";
import GameRoom from "../components/GameRoom";
import type { GameState } from "../types/game";
export default function RoomPage() {
  const { gameState, setGameState } = userGamestore();
  useEffect(() => {
    const handleGameStateUpdate = (state: GameState) => setGameState(state);

    socket.on("gameStateUpdate", handleGameStateUpdate);

    return () => {
      socket.off("gameStateUpdate", handleGameStateUpdate);
    };
  }, [setGameState]);

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
