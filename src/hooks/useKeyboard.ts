"use client";
import { useEffect } from "react";
import { useGameStore } from "@/store/game-store";
export function useKeyboard() { const actions=useGameStore(s=>({move:s.move,rotate:s.rotate,drop:s.drop,holdPiece:s.holdPiece})); useEffect(()=>{const onKey=(e:KeyboardEvent)=>{if(["ArrowLeft","ArrowRight","ArrowDown","ArrowUp"," ","z","c"].includes(e.key))e.preventDefault();if(e.key==="ArrowLeft")actions.move(-1);if(e.key==="ArrowRight")actions.move(1);if(e.key==="ArrowDown")actions.move(0);if(e.key==="ArrowUp")actions.rotate(1);if(e.key==="z")actions.rotate(-1);if(e.key===" ")actions.drop();if(e.key==="c")actions.holdPiece();};window.addEventListener("keydown",onKey);return()=>window.removeEventListener("keydown",onKey);},[actions]); }
