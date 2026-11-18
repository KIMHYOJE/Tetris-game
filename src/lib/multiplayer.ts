export interface BattleMessage { roomId: string; playerId: string; score: number; lines: number; }
export interface BattleTransport { publish(message: BattleMessage): Promise<void>; subscribe(listener: (message: BattleMessage) => void): () => void; }
class LocalTransport implements BattleTransport { private listeners = new Set<(message: BattleMessage) => void>(); async publish(message: BattleMessage) { this.listeners.forEach(listener => listener(message)); } subscribe(listener: (message: BattleMessage) => void) { this.listeners.add(listener); return () => this.listeners.delete(listener); } }
export function createTransport(): BattleTransport { return new LocalTransport(); }
