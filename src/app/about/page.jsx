'use client'
import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();
  return (
    <>
      <h1>ABOUT</h1>
      <p>loremsefksekfksemfkmselkfmlksemfkafads22313</p>
      <button onClick={()=>{
       router.push("/");
      }} >atras</button>
    </>
  );

}
