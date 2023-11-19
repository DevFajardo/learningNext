import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({ GET: "ok" });
}
export async function POST(req) {
  const { nombre, apellido } = await req.json();
  return NextResponse.json({ POST: "ok", nombre, apellido });
}
export function PUT() {
  return NextResponse.json({ PUT: "ok" });
}

export function DELETE() {
  return NextResponse.json({ DELETE: "ok" });
}
