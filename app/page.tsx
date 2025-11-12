"use client";

import ThemeToggle from "./components/ThemeToggle";
import ModeToggle from "./components/ModeToggle";
import socket from "./lib/socket";
import { userGamestore } from "./store/userGamestore";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence, Variants } from "framer-motion";

export default function Home() {
  const [mode, setMode] = useState("create");
  const [username, SetUsername] = useState("");
  const [maxPlayers, SetMaxPlayers] = useState<number>(2);
  const [roomId, SetRoomId] = useState("");
  const { gameState, setGameState, gameError, setGameError } = userGamestore();
  const router = useRouter();

  useEffect(() => {
    socket.on("gameStateUpdate", (state) => {
      setGameState(state);
      console.log(state.players);
    });
    return () => {
      socket.off("gameStateUpdate");
    };
  }, [setGameState]);

  useEffect(() => {
    if (gameState?.roomId) {
      router.push(`/${gameState.roomId}`);
    }
  }, [gameState, router]);

  const handleCreateRoom = () => {
    if (!username) return;
    if (socket && socket.id) {
      localStorage.setItem("lastSocketId", socket.id);
    }
    socket.emit("createRoom", { username, maxPlayers });
  };

  const handleJoinRoom = () => {
    if (!username || !roomId) return;
    if (socket.emit("joinRoom", { username, roomId })) {
    }
  };

  const cardVariants: Variants = {
    initial: {
      opacity: 0,
      x: mode === "join" ? -30 : 30,
      scale: 0.98,
    },
    animate: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.25,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
    exit: {
      opacity: 0,
      x: mode === "join" ? 30 : -30,
      scale: 0.98,
      transition: {
        duration: 0.2,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,var(--color-purple)_0%,transparent_70%)] blur-3xl opacity-30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,var(--color-pink)_0%,transparent_70%)] blur-3xl opacity-30"></div>

      <div className="flex md:flex-row flex-col-reverse absolute top-8 right-8 gap-4">
        <ModeToggle mode={mode} setMode={setMode} />
        <ThemeToggle />
      </div>

      <AnimatePresence mode="wait" initial={false}>
        {mode === "join" ? (
          <motion.div
            key="join"
            variants={cardVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="z-10 bg-(--color-bg)/70 backdrop-blur-lg border border-(--color-line) px-8 py-10 rounded-2xl shadow-xl hover:shadow-(--color-purple)/30 transition-shadow w-80"
          >
            <div className="flex flex-col gap-6">
              <h2 className="text-xl font-semibold text-(--color-fg)">
                Enter Room
              </h2>
              <div>
                <label className="text-(--color-comment) text-sm block mb-2">
                  Username
                </label>
                <input
                  value={username}
                  onChange={(e) => SetUsername(e.target.value)}
                  className="w-full bg-transparent border-b border-(--color-comment) focus:border-(--color-green) text-(--color-fg) py-2 outline-none placeholder-(--color-comment) transition-colors duration-200"
                  placeholder="Enter your username"
                />
              </div>
              <div>
                <label className="text-(--color-comment) text-sm block mb-2">
                  Room Id
                </label>
                <input
                  value={roomId}
                  onChange={(e) => SetRoomId(e.target.value)}
                  className="w-full bg-transparent border-b border-(--color-comment) focus:border-(--color-pink) text-(--color-fg) py-2 outline-none placeholder-(--color-comment) transition-colors duration-200"
                  placeholder="Enter Room Id"
                />
              </div>
              <motion.button
                onClick={handleJoinRoom}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.15 }}
                className="mt-4 w-full py-3 rounded-lg bg-(--color-purple) hover:bg-(--color-pink) text-white font-medium transition-colors duration-200"
              >
                Join Room
              </motion.button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="create"
            variants={cardVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="z-10 bg-(--color-bg)/70 backdrop-blur-lg border border-(--color-line) px-8 py-10 rounded-2xl shadow-xl hover:shadow-(--color-purple)/30 transition-shadow w-80"
          >
            <div className="flex flex-col gap-6">
              <h2 className="text-xl font-semibold text-(--color-fg)">
                Create Room
              </h2>
              <div>
                <label className="text-(--color-comment) text-sm block mb-2">
                  Username
                </label>
                <input
                  value={username}
                  onChange={(e) => SetUsername(e.target.value)}
                  className="w-full bg-transparent border-b border-(--color-comment) focus:border-(--color-green) text-(--color-fg) py-2 outline-none placeholder-(--color-comment) transition-colors duration-200"
                  placeholder="Enter your username"
                />
              </div>
              <div>
                <label className="text-(--color-comment) text-sm block mb-2">
                  Max Players
                </label>
                <input
                  type="number"
                  value={maxPlayers}
                  onChange={(e) => SetMaxPlayers(Number(e.target.value))}
                  className="w-full bg-transparent border-b border-(--color-comment) focus:border-(--color-pink) text-(--color-fg) py-2 outline-none placeholder-(--color-comment) transition-colors duration-200"
                  placeholder="Max number of RST buddies"
                />
              </div>
              <motion.button
                onClick={handleCreateRoom}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.15 }}
                className="mt-4 w-full py-3 rounded-lg bg-(--color-purple) hover:bg-(--color-pink) text-white font-medium transition-colors duration-200"
              >
                Create Room
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
