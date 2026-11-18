"use client";
import Link from "next/link";
import { useGameLoop } from "@/hooks/useGameLoop";
import { useKeyboard } from "@/hooks/useKeyboard";
import { useGameStore } from "@/store/game-store";
import { Board } from "./Board"; import { StatsPanel } from "./StatsPanel"; import { NextQueue } from "./NextQueue"; import { Controls } from "./Controls";
export function GameShell({ battle=false }: { battle?: boolean }) {
  useGameLoop();
  useKeyboard();

  const board = useGameStore((state) => state.board);
  const active = useGameStore((state) => state.active);
  const score = useGameStore((state) => state.score);
  const lines = useGameStore((state) => state.lines);
  const level = useGameStore((state) => state.level);
  const hold = useGameStore((state) => state.hold);
  const next = useGameStore((state) => state.next);
  const gameOver = useGameStore((state) => state.gameOver);
  const holdPiece = useGameStore((state) => state.holdPiece);
  const reset = useGameStore((state) => state.reset);

  return <main className="min-h-screen bg-[radial-gradient(circle_at_top,#172044,#080b18_60%)] px-4 py-8"><div className="mx-auto max-w-5xl"><header className="mb-8 flex items-center justify-between"><Link href="/" className="text-xl font-black tracking-tight">TETRIS<span className="text-neon"> ARENA</span></Link><span className="rounded-full border border-neon/30 px-3 py-1 text-xs text-neon">{battle?"BATTLE":"SOLO"}</span></header><div className="grid gap-8 md:grid-cols-[320px_1fr]"><Board board={board} active={active}/><section className="space-y-6"><StatsPanel score={score} lines={lines} level={level}/><div className="rounded-xl border border-white/10 bg-white/5 p-4"><div className="text-xs text-slate-400">HOLD</div><div className="mt-2 text-2xl font-black text-neon">{hold ?? "—"}</div></div><NextQueue pieces={next}/><Controls/><div className="flex gap-3"><button onClick={holdPiece} className="rounded-lg border border-white/20 px-4 py-3 font-bold">Hold (C)</button><button onClick={reset} className="rounded-lg bg-neon px-5 py-3 font-bold text-ink">Restart game</button></div>{gameOver&&<div className="rounded-xl border border-red-400/40 bg-red-400/10 p-4 text-red-200">Game over. Start again to play.</div>}</section></div></div></main>;
}
