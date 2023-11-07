import fetchData from "../peticion/fetchData";
import PostCard from "@/components/PostCard";
import Posts from "../page";
import { Suspense } from "react";
const page = async ({ params }) => {
  const posts = await fetchData(params.id);

  return (
    <div>
      <PostCard posts={posts} key={posts.id} />
      <hr />
      <h3>Otras Publicaciones:</h3>
      <Suspense fallback={<div>Cargando...</div>}>
        <Posts />
      </Suspense>
    </div>
  );
};

export default page;
