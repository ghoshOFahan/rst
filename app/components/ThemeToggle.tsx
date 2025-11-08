"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => setMounted(true), 0);
  }, []);
  if (!mounted) return null;

  const isDracula = theme === "dracula";
  const playClickSound = () => {
    const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (!isMobile) {
      const sound = new Audio("../../sounds/button.mp3");
      console.log(sound);
      sound.volume = 0.4; // not too loud
      sound.currentTime = 0;
      sound.play().catch(() => {});
    }
  };

  return (
    <button
      onClick={() => {
        setTheme(isDracula ? "tokyo" : "dracula");
        playClickSound();
      }}
      className="flex items-center gap-2 px-4 py-2 rounded-full border transition-all border-(--color-line) bg-(--color-bg) text-(--color-fg) hover:border-(--color-purple)"
    >
      {isDracula ? <Moon size={23} /> : <Sun size={23} />}
    </button>
  );
}
