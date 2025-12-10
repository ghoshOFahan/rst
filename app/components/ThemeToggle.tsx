"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { playClickSound } from "./ModeToggle";
export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => setMounted(true), 0);
  }, []);
  if (!mounted) return null;

  const isDracula = theme === "dracula";

  return (
    <button
      onClick={() => {
        setTheme(isDracula ? "tokyo" : "dracula");
        playClickSound("../../sounds/button.mp3");
      }}
      className="flex items-center gap-2 px-4 py-2 rounded-full border transition-all border-(--color-line) bg-(--color-bg) text-(--color-fg) hover:border-(--color-purple)"
    >
      {isDracula ? <Moon size={23} /> : <Sun size={23} />}
    </button>
  );
}
