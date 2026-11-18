import { chooseMove as chooseLegacyMove } from "../../src/engine/ai";
import { hardDrop } from "../../src/engine/engine";
import type { GameState } from "../../src/engine/types";

export interface BotMove { rotation: number; x: number; }

export function chooseMove(state: GameState): BotMove {
  return chooseLegacyMove(state);
}

export function playBotTurn(state: GameState, random?: () => number): GameState {
  const move = chooseMove(state);
  let next = state;
  for (let index = 0; index < move.rotation; index += 1) next = { ...next, active: { ...next.active, rotation: (next.active.rotation + 1) % 4 } };
  next = { ...next, active: { ...next.active, x: move.x } };
  while (next.active.y < 21) {
    const candidate = { ...next.active, y: next.active.y + 1 };
    if (candidate.y >= 22 || next.board[candidate.y]?.[candidate.x] !== null) break;
    next = { ...next, active: candidate };
  }
  return hardDrop(state, random);
}
