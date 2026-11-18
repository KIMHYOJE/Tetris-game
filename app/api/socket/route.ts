import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ provider: process.env.ABLY_API_KEY ? "ably" : "local", status: "ready" });
}

export async function POST(request: Request) {
  const payload: unknown = await request.json().catch(() => null);
  if (!payload || typeof payload !== "object" || !("roomId" in payload) || typeof payload.roomId !== "string") {
    return NextResponse.json({ error: "roomId is required" }, { status: 400 });
  }
  return NextResponse.json({ roomId: payload.roomId, provider: process.env.ABLY_API_KEY ? "ably" : "local" });
}
