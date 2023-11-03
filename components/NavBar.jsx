import Link from 'next/link'
export default function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href={"/"}>home</Link>
        </li>
        <li>
          <Link href={"/about"}>about</Link>
        </li>
        <li>
          <Link href={"/products"}>products</Link>
        </li>
        <li>
          <Link href={"/posts"}>posts</Link>
        </li>
      </ul>
    </nav>
  );
}
