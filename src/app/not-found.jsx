import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <h1>Not Found 404</h1>
      <p>pagina no encontrada</p>
      <Link href={"/"}>volver</Link>
    </>
  );
}
