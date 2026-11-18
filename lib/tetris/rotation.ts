import { collides } from "../../src/engine/engine";
import { rotate } from "../../src/engine/srs";
import type { ActivePiece, Board } from "../../src/engine/types";

export function rotatePiece(board: Board, piece: ActivePiece, direction: 1 | -1 = 1): ActivePiece | null {
  return rotate(piece, direction).find((candidate) => !collides(board, candidate)) ?? null;
}

export function getRotations(piece: ActivePiece): ActivePiece[] {
  return [0, 1, 2, 3].map((rotation) => ({ ...piece, rotation }));
}
