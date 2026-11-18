import type { PieceType } from "@/engine/types";
export function NextQueue({ pieces }: { pieces: PieceType[] }) { return <div><h3 className="mb-2 text-sm font-semibold text-slate-300">NEXT</h3><div className="flex gap-2">{pieces.slice(0,5).map((piece,i)=><div key={`${piece}-${i}`} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 font-bold">{piece}</div>)}</div></div>; }
