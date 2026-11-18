import type { RoomEvent, RoomSnapshot } from "./eventTypes";

export interface RoomManager { join(roomId: string, playerId: string): RoomSnapshot; leave(roomId: string, playerId: string): RoomSnapshot | null; publish(roomId: string, event: RoomEvent): void; subscribe(roomId: string, listener: (event: RoomEvent) => void): () => void; }

class InMemoryRoomManager implements RoomManager {
  private rooms = new Map<string, Set<string>>();
  private listeners = new Map<string, Set<(event: RoomEvent) => void>>();
  join(roomId: string, playerId: string): RoomSnapshot { const players = this.rooms.get(roomId) ?? new Set<string>(); players.add(playerId); this.rooms.set(roomId, players); return { roomId, players: [...players], started: players.size > 1 }; }
  leave(roomId: string, playerId: string): RoomSnapshot | null { const players = this.rooms.get(roomId); if (!players) return null; players.delete(playerId); if (!players.size) { this.rooms.delete(roomId); return null; } return { roomId, players: [...players], started: players.size > 1 }; }
  publish(roomId: string, event: RoomEvent): void { this.listeners.get(roomId)?.forEach((listener) => listener(event)); }
  subscribe(roomId: string, listener: (event: RoomEvent) => void): () => void { const listeners = this.listeners.get(roomId) ?? new Set(); listeners.add(listener); this.listeners.set(roomId, listeners); return () => listeners.delete(listener); }
}

export const roomManager: RoomManager = new InMemoryRoomManager();
