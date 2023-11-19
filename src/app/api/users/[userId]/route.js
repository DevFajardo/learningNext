import { NextResponse } from "next/server";

export function GET(req, { params }) {
  const { searchParams } = new URL(req.url);
  console.log(searchParams);
  const nombre = searchParams.get("nombre");
  const apellido = searchParams.get("apellido");
  return NextResponse.json({
    GET: "ok",
    id: params.userId,
    nombre: nombre,
    apellido: apellido,
  });
}
