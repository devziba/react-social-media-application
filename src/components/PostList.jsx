import { useContext } from "react";
import { PostList as postListData } from "../store/post-list-store";
import Post from "./Post";
import WelcomeMessage from "./WelcomeMessage";
function PostList() {
  let { postList , addInitialPosts } = useContext(postListData);
  let posts = postList;

  if (posts.length === 0) {
    const handleGetPostClick = () => {
      fetch("https://dummyjson.com/posts")
        .then((res) => res.json())
        .then(data =>{

          data.posts.forEach((value)=>{
            addInitialPosts(value)}
          )
          }
          ).catch((error) => console.error("Failed to fetch posts:", error));
    };
    return (
      <WelcomeMessage onGetPostsClick={handleGetPostClick}></WelcomeMessage>
    );
  }

  return (
    <>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
}

export default PostList;
