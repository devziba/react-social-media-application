import { useContext, useEffect, useState } from "react";
import { PostList as postListData } from "../store/post-list-store";
import Post from "./Post";
import WelcomeMessage from "./WelcomeMessage";
function PostList() {
  let { postList, addInitialPosts } = useContext(postListData);
  const [fetching, setFetching] = useState(false);
  useEffect(() => {
    setFetching(true);
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        data.posts.forEach((value) => {
          addInitialPosts(value);
          setFetching(false);
        });
      })
      .catch((error) => console.error("Failed to fetch posts:", error));
  }, []);
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
