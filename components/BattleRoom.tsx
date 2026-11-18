"use client";
import { useMultiplayer } from "../hooks/useMultiplayer";
export function BattleRoom({ roomId, playerId }: { roomId: string; playerId: string }) { const { opponent } = useMultiplayer(roomId, playerId); return <section className="rounded-xl border border-white/10 bg-white/5 p-4"><h2 className="font-bold">Battle room</h2><p className="mt-2 text-sm text-slate-400">{opponent ? `Opponent score: ${opponent.score}` : "Waiting for opponent…"}</p></section>; }
