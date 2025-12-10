"use client";

import { LogIn, Home as Homeicons } from "lucide-react";
interface ModeToggleProps {
  mode: string;
  setMode: (mode: string) => void;
}
export const playClickSound = (music: string) => {
  const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  if (!isMobile) {
    const sound = new Audio(music);
    console.log(sound);
    sound.volume = 0.4; // not too loud
    sound.currentTime = 0;
    sound.play().catch(() => {});
  }
};
export default function ModeToggle({ mode, setMode }: ModeToggleProps) {
  const isMode = mode === "join";
  return (
    <button
      onClick={() => {
        setMode(isMode ? "create" : "join");
        playClickSound("../../sounds/modechange.mp3");
      }}
      className="flex items-center gap-2 px-4 py-2 rounded-full border transition-all border-(--color-line) bg-(--color-bg) text-(--color-fg) hover:border-(--color-purple)"
    >
      {isMode ? <Homeicons /> : <LogIn />}
    </button>
  );
}
