export function gravity(level: number): number {
  return Math.max(70, 800 - Math.max(0, level - 1) * 65);
}

export function gravityDistance(level: number, elapsedMs: number): number {
  return Math.floor(elapsedMs / gravity(level));
}
