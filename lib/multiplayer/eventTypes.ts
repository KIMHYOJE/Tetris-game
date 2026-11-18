import type { PieceType } from "../../src/engine/types";

export type RoomEvent =
  | { type: "player:join"; playerId: string; displayName: string }
  | { type: "player:leave"; playerId: string }
  | { type: "game:start"; seed: number }
  | { type: "game:state"; playerId: string; score: number; lines: number; boardHash?: string }
  | { type: "game:garbage"; playerId: string; lines: number; source: PieceType };

export interface RoomSnapshot { roomId: string; players: string[]; started: boolean; }
