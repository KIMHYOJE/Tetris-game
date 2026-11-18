import type { ActivePiece, Point } from "./types";
import { PIECES } from "./pieces";
const KICKS: Point[] = [[0,0],[-1,0],[1,0],[0,-1],[-2,0],[2,0]];
export function cells(piece: ActivePiece): Point[] { return PIECES[piece.type][piece.rotation].map(([x,y]) => [piece.x+x,piece.y+y]); }
export function rotate(piece: ActivePiece, direction: 1|-1): ActivePiece[] { const rotation = (piece.rotation + direction + 4) % 4; return KICKS.map(([dx,dy]) => ({ ...piece, rotation, x: piece.x + dx, y: piece.y + dy })); }
