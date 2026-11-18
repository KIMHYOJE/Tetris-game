export type ScoringEvent = "single" | "double" | "triple" | "tetris" | "tspin";

const LINE_POINTS: Record<number, number> = { 0: 0, 1: 100, 2: 300, 3: 500, 4: 800 };

export function calculateScore(lines: number, level: number, combo = 0, backToBack = false): number {
  const base = (LINE_POINTS[Math.min(lines, 4)] ?? 0) * Math.max(1, level);
  const comboBonus = lines > 0 ? combo * 50 * Math.max(1, level) : 0;
  const multiplier = backToBack && lines === 4 ? 1.5 : 1;
  return Math.floor((base + comboBonus) * multiplier);
}

export function scoreForEvent(event: ScoringEvent, level: number): number {
  const values: Record<ScoringEvent, number> = { single: 100, double: 300, triple: 500, tetris: 800, tspin: 1200 };
  return values[event] * Math.max(1, level);
}
