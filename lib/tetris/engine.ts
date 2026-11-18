import { clearLines as clearBoardLines, collides, emptyBoard, hardDrop as dropState, lock as lockState, merge, move, rotatePiece as rotateState, spawn } from "../../src/engine/engine";
import { calculateScore } from "./scoring";
import type { ActivePiece, Board, GameState, PieceType } from "../../src/engine/types";

export { emptyBoard as createEmptyBoard, spawn as spawnPiece };
export type { ActivePiece, Board, GameState, PieceType };

export function movePiece(board: Board, piece: ActivePiece, dx: number, dy = 0): ActivePiece | null {
  const candidate = { ...piece, x: piece.x + dx, y: piece.y + dy };
  return collides(board, candidate) ? null : candidate;
}

export function rotatePiece(state: GameState, direction: 1 | -1 = 1): GameState {
  return rotateState(state, direction);
}

export function hardDrop(state: GameState, random?: () => number): GameState {
  return dropState(state, random);
}

export function lockPiece(state: GameState, random?: () => number): GameState {
  return lockState(state, random);
}

export function clearLines(board: Board): { board: Board; lines: number; score: number } {
  const result = clearBoardLines(board);
  return { board: result.board, lines: result.count, score: calculateScore(result.count, 1) };
}

export function calculateGarbage(lines: number, combo = 0, backToBack = false): number {
  if (lines <= 0) return 0;
  const bonus = Math.max(0, combo - 1);
  const difficultClear = lines >= 4 ? 1 : 0;
  return Math.max(0, lines - 1 + bonus + (backToBack ? difficultClear : 0));
}

export function checkGameOver(board: Board, piece: ActivePiece): boolean {
  return collides(board, piece);
}

export { emptyBoard, merge, move };
