"use client";
const PostCard = ({ posts }) => {
  return (
    <>
      <h3>
        {posts.id} - {posts.title}
      </h3>
      <p>{posts.body}</p>
      <button onClick={() => alert("hello " + posts.id)}>Saludar</button>
    </>
  );
};

export default PostCard;
