import { useContext } from "react";
import { PostList as postListData } from "../store/post-list-store";
import Post from "./Post";
import WelcomeMessage from "./WelcomeMessage";
function PostList() {
  let allPosts = useContext(postListData);
  let { addInitialPosts } = useContext(postListData);
  let posts = allPosts.postList;

  if (posts.length === 0) {
    const handleGetPostClick = () => {
      fetch("https://dummyjson.com/posts")
        .then((res) => res.json())
        .then(data =>{

          data.posts.map((value)=>{
            addInitialPosts(value)}
          )
          }
          );
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
