"use client";
import { useEffect } from "react";
import { useGameStore } from "@/store/game-store";
export function useKeyboard() {
  const move = useGameStore((state) => state.move);
  const rotate = useGameStore((state) => state.rotate);
  const drop = useGameStore((state) => state.drop);
  const holdPiece = useGameStore((state) => state.holdPiece);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (["ArrowLeft", "ArrowRight", "ArrowDown", "ArrowUp", " ", "z", "c"].includes(event.key)) {
        event.preventDefault();
      }
      if (event.key === "ArrowLeft") move(-1);
      if (event.key === "ArrowRight") move(1);
      if (event.key === "ArrowDown") move(0);
      if (event.key === "ArrowUp") rotate(1);
      if (event.key === "z") rotate(-1);
      if (event.key === " ") drop();
      if (event.key === "c") holdPiece();
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [drop, holdPiece, move, rotate]);
}
