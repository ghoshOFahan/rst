"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Users, Globe, X, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface GameModeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GameModeModal({ isOpen, onClose }: GameModeModalProps) {
  const router = useRouter();
  const [selectedMode, setSelectedMode] = useState<
    "ai" | "multiplayer" | "join" | null
  >(null);

  const handleStart = () => {
    if (selectedMode === "ai") {
      // For AI mode, create a special route
      // const aiRoomId = `ai-${Date.now()}`;
      router.push(`/#`);
    } else if (selectedMode === "multiplayer") {
      // Create room via socket, then navigate to the new room
      // const username = "PlayerOne";
      // const generatedRoomId = `room-${Date.now()}`;
      //
      // // Store temporary room info
      // localStorage.setItem(
      //   "pendingRoom",
      //   JSON.stringify({
      //     mode: "multiplayer",
      //     username,
      //     generatedRoomId,
      //   }),
      // );

      router.push(`/#`);
    } else if (selectedMode === "join") {
      // if (roomId) {
      router.push(`/#`);
      // }
    }
    onClose(); // Close modal after navigation
  };

  const modes = [
    {
      id: "ai",
      title: "Train with AI",
      desc: "Sharpen your semantic profile against the engine.",
      icon: <Bot size={24} />,
      color: "from-[var(--color-blue)] to-[var(--color-purple)]",
    },
    {
      id: "multiplayer",
      title: "Create Room",
      desc: "Host a lobby and challenge a human mind.",
      icon: <Globe size={24} />,
      color: "from-[var(--color-purple)] to-[var(--color-pink)]",
    },
    {
      id: "join",
      title: "Join Room",
      desc: "Enter an existing lobby code.",
      icon: <Users size={24} />,
      color: "from-[var(--color-pink)] to-[var(--color-red)]",
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl bg-[var(--color-bg)] border border-[var(--color-line)] rounded-2xl shadow-2xl z-[70] p-8 overflow-hidden"
          >
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-purple)]/10 blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--color-pink)]/10 blur-[100px] pointer-events-none" />

            <div className="relative z-10">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-[var(--color-fg)]">
                  Select Protocol
                </h2>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-[var(--color-line)] rounded-full transition-colors"
                >
                  <X size={20} className="text-[var(--color-comment)]" />
                </button>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-8">
                {modes.map((mode) => (
                  <button
                    key={mode.id}
                    onClick={() => setSelectedMode(mode.id as any)}
                    className={`relative p-4 rounded-xl border transition-all text-left group overflow-hidden ${
                      selectedMode === mode.id
                        ? "border-[var(--color-purple)] bg-[var(--color-purple)]/10"
                        : "border-[var(--color-line)] hover:border-[var(--color-comment)] bg-[var(--color-line)]/20"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-lg bg-gradient-to-br ${mode.color} flex items-center justify-center text-white mb-3 shadow-lg`}
                    >
                      {mode.icon}
                    </div>
                    <h3 className="font-semibold text-[var(--color-fg)] mb-1">
                      {mode.title}
                    </h3>
                    <p className="text-xs text-[var(--color-comment)] leading-relaxed">
                      {mode.desc}
                    </p>

                    {selectedMode === mode.id && (
                      <motion.div
                        layoutId="active-ring"
                        className="absolute inset-0 border-2 border-[var(--color-purple)] rounded-xl pointer-events-none"
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Removed join room input section */}

              <div className="flex justify-end gap-4">
                <button
                  onClick={onClose}
                  className="px-6 py-2 text-[var(--color-comment)] hover:text-[var(--color-fg)] font-medium"
                >
                  Cancel
                </button>
                <button
                  onClick={handleStart}
                  disabled={!selectedMode} // Removed roomId condition
                  className="px-8 py-2 rounded-lg bg-[var(--color-purple)] hover:bg-[var(--color-pink)] text-white font-medium flex items-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Initiate Link <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
