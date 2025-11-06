import { create } from "zustand";
import type { GameState } from "../types/game";
interface GameStore {
  gameState: GameState | null;
  gameError: string | null;
  setGameState: (state: GameState) => void;
  setGameError: (state: string) => void;
}
export const userGamestore = create<GameStore>((set) => ({
  gameState: null,
  gameError: null,
  setGameState: (state) => set({ gameState: state }),
  setGameError: (error) => set({ gameError: error }),
}));
