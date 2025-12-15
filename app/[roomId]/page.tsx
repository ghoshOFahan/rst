"use client";
import socket from "../lib/socket";
import type { Player } from "../types/game";
import WaitingLobby from "../components/WaitingLobby";
import { userGamestore } from "../store/userGamestore";
import { useEffect, useState } from "react";
import GameRoom from "../components/room/GameRoom";
import type { GameState } from "../types/game";
import { useRouter } from "next/navigation";
const getClientId = () => {
  let id = localStorage.getItem("clientId");
  if (!id) {
    id = `${Date.now()}-${Math.random().toString(36).slice(2, 11)}`;
    localStorage.setItem("clientId", id);
  }
  return id;
};

export default function RoomPage() {
  const router = useRouter();
  const { gameState, setGameState } = userGamestore();
  const [commentary, setCommentary] = useState<string | null>(null);
  const exitGame = () => {
    if (gameState?.roomId) {
      socket.emit("leaveRoom", {
        roomId: gameState.roomId,
        clientId: getClientId(),
      });
    }
    setGameState(null);
    setCommentary(null);
    localStorage.removeItem("lastRoomId");

    // go home
    router.push("/");
  };
  useEffect(() => {
    const handleGameStateUpdate = (state: GameState) => {
      setGameState(state);
      localStorage.setItem("lastRoomId", state.roomId);
    };
    const handleGameEnded = ({
      gameState,
      commentary,
    }: {
      gameState: GameState;
      commentary: string;
    }) => {
      setGameState(gameState);
      setCommentary(commentary);
    };

    socket.on("gameStateUpdate", handleGameStateUpdate);
    socket.on("gameEnded", handleGameEnded);
    socket.on("gameError", (err) => console.error("Game error:", err));

    return () => {
      socket.off("gameStateUpdate", handleGameStateUpdate);
      socket.off("gameEnded", handleGameEnded);
      socket.off("gameError");
    };
  }, [setGameState]);

  useEffect(() => {
    const lastRoomId = localStorage.getItem("lastRoomId");
    if (!gameState && lastRoomId) {
      socket.emit("reconnectRoom", {
        roomId: lastRoomId,
        clientId: getClientId(),
      });
    }
  }, [gameState]);

  useEffect(() => {
    const lastRoomId = localStorage.getItem("lastRoomId");

    if (!gameState && !lastRoomId) {
      router.push("/");
    }
  }, [gameState, router]);
  if (!gameState) {
    return <div className="text-center p-10">Loading room...</div>;
  }
  const currentPlayer = gameState.players.find(
    (p): p is Player => p.clientId === getClientId()
  );
  const isEliminated = currentPlayer?.isEliminated;
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
      return (
        <div className="relative w-full h-full">
          {isEliminated && (
            <div className="fixed top-0 left-0 w-full h-12 md:h-16 text-sm md:text-xl bg-red-600/90 text-white z-50 flex items-center justify-center font-bold animate-pulse">
              YOU HAVE BEEN DISQUALIFIED!
            </div>
          )}
          <div
            className={
              isEliminated ? "opacity-75 pointer-events-none grayscale" : ""
            }
          >
            <GameRoom />
          </div>
        </div>
      );
    case "FINISHED":
      return (
        <div className="flex flex-col items-center justify-center min-h-screen p-10 text-center space-y-6">
          <h1 className="text-6xl font-black text-(--color-pink)">GAME OVER</h1>
          <div className="text-2xl">
            Winner:{" "}
            <span className="font-bold text-green-400">{gameState.winner}</span>
          </div>
          {commentary && (
            <div className="bg-(--color-line) p-6 rounded-xl border border-(--color-purple) max-w-2xl mt-8">
              <h3 className="text-sm uppercase tracking-widest text-(--color-comment) mb-2">
                AI Commentator
              </h3>
              <p className="text-xl italic font-serif leading-relaxed">
                &ldquo;{commentary}&rdquo;
              </p>
            </div>
          )}

          <button
            onClick={exitGame}
            className="px-6 py-3 bg-(--color-purple) rounded-lg font-bold hover:scale-105 transition"
          >
            Back to Home
          </button>
        </div>
      );
    default:
      return <div>Unknown game status!</div>;
  }
}
