"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Timer, Send, AlertCircle, Sparkles } from "lucide-react";

// Mock History
const MOCK_HISTORY = [
  { id: 1, word: "Ocean", user: "PlayerOne", isMe: true },
  { id: 2, word: "Depth", user: "AI Judge", isMe: false },
  { id: 3, word: "Pressure", user: "PlayerOne", isMe: true },
  { id: 4, word: "Diamond", user: "AI Judge", isMe: false },
];

export default function GameArena({ params }: { params: { id: string } }) {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState(MOCK_HISTORY);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Optimistic UI Update
    setHistory([
      ...history,
      {
        id: Date.now(),
        word: input,
        user: "PlayerOne",
        isMe: true,
      },
    ]);

    setInput("");
    // socket.emit("submitWord", ...);
  };

  return (
    <div className="h-screen bg-[var(--color-bg)] text-[var(--color-fg)] flex flex-col overflow-hidden">
      {/* Game Header */}
      <header className="h-16 border-b border-[var(--color-line)] flex items-center justify-between px-6 bg-[var(--color-bg)]/80 backdrop-blur">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-[var(--color-green)] animate-pulse" />
          <span className="font-mono text-sm tracking-wider text-[var(--color-comment)]">
            ROOM: {params.id}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-end">
            <span className="text-xs text-[var(--color-comment)]">
              Opponent
            </span>
            <span className="font-bold text-sm">Bot (AI)</span>
          </div>
          <div className="w-8 h-8 rounded-lg bg-[var(--color-line)] flex items-center justify-center">
            <Sparkles size={16} className="text-[var(--color-purple)]" />
          </div>
        </div>
      </header>

      {/* Main Game Area */}
      <main className="flex-1 max-w-2xl mx-auto w-full flex flex-col p-4 relative">
        {/* Timer Bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-[var(--color-line)]">
          <motion.div
            initial={{ width: "100%" }}
            animate={{ width: "0%" }}
            transition={{ duration: 10, ease: "linear", repeat: Infinity }}
            className="h-full bg-[var(--color-purple)]"
          />
        </div>

        {/* Word Chain */}
        <div
          ref={scrollRef}
          className="flex-1 overflow-y-auto space-y-4 py-6 px-2 scroll-smooth"
        >
          {history.map((move) => (
            <motion.div
              key={move.id}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className={`flex ${move.isMe ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`
                max-w-[70%] px-5 py-3 rounded-2xl text-lg font-medium shadow-sm
                ${
                  move.isMe
                    ? "bg-[var(--color-purple)] text-white rounded-br-none"
                    : "bg-[var(--color-line)] text-[var(--color-fg)] rounded-bl-none"
                }
              `}
              >
                {move.word}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Input Area */}
        <div className="mt-4 pb-4">
          <form onSubmit={handleSubmit} className="relative">
            <input
              autoFocus
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a related word..."
              className="w-full bg-[var(--color-line)]/20 border border-[var(--color-line)] rounded-xl py-4 pl-6 pr-14 text-lg outline-none focus:border-[var(--color-purple)] focus:bg-[var(--color-bg)] transition-all placeholder-[var(--color-comment)]"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-[var(--color-purple)] text-white hover:bg-[var(--color-pink)] disabled:opacity-50 disabled:bg-[var(--color-line)] transition-colors"
            >
              <Send size={20} />
            </button>
          </form>
          <div className="flex justify-between items-center mt-3 px-2">
            <div className="flex items-center gap-2 text-xs text-[var(--color-comment)]">
              <AlertCircle size={12} />
              <span>
                Must relate to:{" "}
                <span className="text-[var(--color-fg)] font-bold">
                  {history[history.length - 1].word}
                </span>
              </span>
            </div>
            <span className="text-xs font-mono text-[var(--color-comment)]">
              TURN 05/20
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}
