"use client";
import { COLORS } from "@/engine/pieces";
import { cells } from "@/engine/srs";
import type { Board, ActivePiece } from "@/engine/types";
export function Board({ board, active }: { board: Board; active?: ActivePiece }) { const display=board.map(row=>[...row]); if(active)for(const [x,y] of cells(active))if(y>=0&&y<display.length&&x>=0&&x<10)display[y][x]=active.type; return <div className="grid aspect-[10/22] w-full max-w-[320px] grid-cols-10 gap-px rounded-xl bg-slate-800 p-1 shadow-neon">{display.map((row,y)=>row.map((cell,x)=><div key={`${x}-${y}`} className={`aspect-square rounded-sm ${cell?COLORS[cell]:"bg-slate-950/80"}`} />))}</div>; }
