import PostCard from "@/components/PostCard";
import fetchData from "./peticion/fetchData";

async function Posts() {
  const post = await fetchData();
  return (
    <div>
      {post.map((posts) => (
        <>
          <PostCard posts={posts} key={posts.id} />
        </>
      ))}
    </div>
  );
}

export default Posts;
