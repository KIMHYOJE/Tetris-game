"use client";
import { useEffect, useState } from "react";
import { createTransport } from "../src/lib/multiplayer";
import type { BattleMessage } from "../src/lib/multiplayer";

export function useMultiplayer(roomId: string, playerId: string) {
  const [opponent, setOpponent] = useState<BattleMessage | null>(null);
  useEffect(() => {
    const transport = createTransport();
    return transport.subscribe((message) => { if (message.roomId === roomId && message.playerId !== playerId) setOpponent(message); });
  }, [playerId, roomId]);
  return { opponent };
}
