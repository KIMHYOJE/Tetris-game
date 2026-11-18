export type PieceType = "I" | "J" | "L" | "O" | "S" | "T" | "Z";
export type Cell = PieceType | null;
export type Board = Cell[][];
export type Point = readonly [number, number];
export interface ActivePiece { type: PieceType; rotation: number; x: number; y: number; }
export interface GameState { board: Board; active: ActivePiece; next: PieceType[]; hold: PieceType | null; canHold: boolean; score: number; lines: number; level: number; combo: number; gameOver: boolean; }
