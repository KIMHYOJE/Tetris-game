"use client";
import { create } from "zustand";
import { hardDrop, initialState, move, rotatePiece } from "@/engine/engine";
import type { GameState } from "@/engine/types";
interface GameStore extends GameState { tick: () => void; move: (dx: number) => void; rotate: (direction: 1|-1) => void; drop: () => void; holdPiece: () => void; reset: () => void; }
const deterministicRandom = (): number => 0.5;

export const useGameStore = create<GameStore>((set) => ({
  ...initialState(deterministicRandom),
  tick: () => set((state) => {
    const moved = move(state, 0, 1);
    return moved.active.y === state.active.y ? hardDrop(state) : moved;
  }),
  move: (dx) => set((state) => move(state, dx, 0)),
  rotate: (direction) => set((state) => rotatePiece(state, direction)),
  drop: () => set((state) => hardDrop(state)),
  holdPiece: () => set((state) => {
    if (!state.canHold) return state;
    const replacement = state.hold ?? state.next[0];
    const next = state.hold ? state.next : state.next.slice(1);
    return {
      ...state,
      active: { type: replacement, rotation: 0, x: 3, y: 0 },
      hold: state.active.type,
      next,
      canHold: false,
    };
  }),
  reset: () => set(initialState(deterministicRandom)),
}));
