import { NextResponse } from "next/server";
export async function GET() { return NextResponse.json({ provider: process.env.ABLY_API_KEY ? "ably" : "local", status: "ready" }); }
export async function POST(request: Request) {
  const body: unknown = await request.json().catch(() => null);
  if (!body || typeof body !== "object" || !("roomId" in body) || typeof body.roomId !== "string" || body.roomId.length < 1) {
    return NextResponse.json({ error: "roomId is required" }, { status: 400 });
  }
  return NextResponse.json({ roomId: body.roomId, provider: process.env.ABLY_API_KEY ? "ably" : "local" });
}
