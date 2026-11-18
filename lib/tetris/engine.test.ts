import { describe, expect, it } from "vitest";
import { calculateGarbage, createEmptyBoard } from "./engine";
import { calculateScore } from "./scoring";

describe("public tetris engine adapters", () => {
  it("creates a fresh board and calculates attack", () => {
    const board = createEmptyBoard();
    expect(board).toHaveLength(22);
    expect(board[0]).toHaveLength(10);
    expect(calculateGarbage(4, 0, false)).toBe(3);
  });

  it("scores lines by level and combo", () => {
    expect(calculateScore(2, 2, 1)).toBe(700);
  });
});
