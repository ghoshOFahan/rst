"use client";
import { ReactNode, useEffect } from "react";
import Socket from "../lib/socket";
import { userGamestore } from "../store/userGamestore";
interface SocketProviderChildren {
  children: ReactNode;
}
export default function SocketProvider({ children }: SocketProviderChildren) {
  const { setGameState, setGameError } = userGamestore();
  useEffect(() => {
    Socket.connect();
    Socket.on("gameStateUpdate", setGameState);
    Socket.on("gameError", setGameError);
    return () => {
      Socket.off("gameStateUpdate");
      Socket.off("gameError");
      Socket.disconnect();
    };
  }, [setGameState, setGameError]);
  return <>{children}</>;
}
