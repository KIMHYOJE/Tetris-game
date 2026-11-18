"use client";
import { useEffect } from "react";
import { useGameStore } from "@/store/game-store";
import { gravityMs } from "@/engine/engine";
export function useGameLoop() { const level = useGameStore(s=>s.level); const tick = useGameStore(s=>s.tick); const gameOver = useGameStore(s=>s.gameOver); useEffect(()=>{ if(gameOver)return; const id=window.setInterval(tick,gravityMs(level)); return()=>window.clearInterval(id); },[level,tick,gameOver]); }
