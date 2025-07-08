import { useContext, useEffect, useState } from "react";
import { PostList as postListData } from "../store/post-list-store";
import Post from "./Post";
import WelcomeMessage from "./WelcomeMessage";
function PostList() {
  let { postList } = useContext(postListData);
  
  if (postList.length === 0) {
    return <WelcomeMessage></WelcomeMessage>;
  }

  return (
    <>
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
}

export default PostList;
