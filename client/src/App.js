import React from "react";
import PostCreate from "./PostCreate";
import PostList from "./PostList";
import usePosts from "./usePosts";

const App = () => {
  const { posts, fetchPosts } = usePosts();
  return (
    <div className="container">
      <h1>Create Post</h1>
      <PostCreate  onCreate={fetchPosts} />
      <hr />
      <h1>Posts</h1>
      <PostList posts={posts} onCommentCreate={fetchPosts} />
    </div>
  );
};
export default App;
