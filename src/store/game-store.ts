"use client";
import { create } from "zustand";
import { hardDrop, initialState, move, rotatePiece } from "@/engine/engine";
import type { GameState } from "@/engine/types";
interface GameStore extends GameState { tick: () => void; move: (dx: number) => void; rotate: (direction: 1|-1) => void; drop: () => void; holdPiece: () => void; reset: () => void; }
export const useGameStore = create<GameStore>((set) => ({ ...initialState(), tick: () => set(s => move(s,0,1).active.y === s.active.y ? hardDrop(s) : move(s,0,1)), move: dx => set(s => move(s,dx,0)), rotate: direction => set(s => rotatePiece(s,direction)), drop: () => set(s => hardDrop(s)), holdPiece: () => set(s => { if (!s.canHold) return s; const replacement = s.hold ?? s.next[0]; const next = s.hold ? s.next : s.next.slice(1); return { ...s, active: { type: replacement, rotation: 0, x: 3, y: 0 }, hold: s.active.type, next, canHold: false }; }), reset: () => set(initialState()) }));
