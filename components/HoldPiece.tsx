import type { PieceType } from "../src/engine/types";
export function HoldPiece({ piece }: { piece: PieceType | null }) { return <div className="rounded-xl border border-white/10 bg-white/5 p-4"><div className="text-xs text-slate-400">HOLD</div><div className="mt-2 text-2xl font-black text-neon">{piece ?? "—"}</div></div>; }
