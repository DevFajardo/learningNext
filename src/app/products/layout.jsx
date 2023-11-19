import Link from "next/link";
export default function ProductsLayout({ children }) {
  return (
    <>
    {children}
      <nav>
        <ul>
          <li>
            <Link href={"/products/comida"}>comida</Link>
          </li>
          <li>
            <Link href={"/products/ropa"}>ropa</Link>
          </li>
        </ul>
      </nav>
      
    </>
  );
}
