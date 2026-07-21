import { NextResponse } from "next/server";

export async function GET() {
  // Quick health check: DB configured and connectable => 200, otherwise 503
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    return NextResponse.json({ healthy: false, reason: "MONGODB_URI not set" }, { status: 503 });
  }

  try {
    const { default: clientPromise } = await import("../../../../lib/mongodb");
    await clientPromise; // will reject if bad
    return NextResponse.json({ healthy: true }, { status: 200 });
  } catch (err) {
    console.error("Health check DB error:", err?.message || err);
    return NextResponse.json({ healthy: false, reason: "DB connection failed" }, { status: 503 });
  }
}
