import { useContext } from "react";
import { PostList as postListData } from "../store/post-list-store";
import Post from "./Post";
function PostList() {

  let allPosts=useContext(postListData);
  let posts=allPosts.postList;
  return (
    <>
    {posts.map((post)=><Post key={post.id} post={post}/>)
    }
    </>
  );
}

export default PostList;
