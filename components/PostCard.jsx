"use client";

import Link from "next/link";

const PostCard = ({ posts }) => {
  return (
    <>
      <h3>
        {posts.id} -<Link href={`/posts/${posts.id}`}>{posts.title}</Link>
      </h3>
      <p>{posts.body}</p>
      <button onClick={() => alert("hello " + posts.id)}>Saludar</button>
    </>
  );
};

export default PostCard;
