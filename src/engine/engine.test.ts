import { describe, expect, it } from "vitest";
import { clearLines, emptyBoard, hardDrop, initialState } from "./engine";
describe("tetris engine",()=>{ it("clears a full row",()=>{const board=emptyBoard();board[21]=Array(10).fill("I");expect(clearLines(board).count).toBe(1);expect(clearLines(board).board[0].every(c=>c===null)).toBe(true);}); it("hard drop locks and advances piece",()=>{const state=initialState(()=>0.2);const next=hardDrop(state,()=>0.4);expect(next.score).toBeGreaterThanOrEqual(0);expect(next.active).not.toEqual(state.active);}); });
