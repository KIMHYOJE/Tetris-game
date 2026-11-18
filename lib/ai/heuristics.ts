import type { Board } from "../../src/engine/types";

export interface BoardFeatures { aggregateHeight: number; holes: number; bumpiness: number; wells: number; }

export function boardFeatures(board: Board): BoardFeatures {
  const heights = Array.from({ length: 10 }, (_, x) => {
    let y = 0;
    while (y < board.length && board[y][x] === null) y += 1;
    return board.length - y;
  });
  let holes = 0;
  for (let x = 0; x < 10; x += 1) {
    let filled = false;
    for (let y = 0; y < board.length; y += 1) {
      if (board[y][x]) filled = true;
      else if (filled) holes += 1;
    }
  }
  const bumpiness = heights.slice(1).reduce((sum, height, index) => sum + Math.abs(height - heights[index]), 0);
  const wells = heights.reduce((sum, height, index) => {
    const left = index === 0 ? 22 : heights[index - 1];
    const right = index === 9 ? 22 : heights[index + 1];
    return sum + Math.max(0, Math.min(left, right) - height);
  }, 0);
  return { aggregateHeight: heights.reduce((sum, height) => sum + height, 0), holes, bumpiness, wells };
}

export function evaluateBoard(board: Board): number {
  const features = boardFeatures(board);
  return -0.51 * features.aggregateHeight - 0.76 * features.holes - 0.18 * features.bumpiness + 0.12 * features.wells;
}
