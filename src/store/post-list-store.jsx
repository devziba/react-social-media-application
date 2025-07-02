import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  addInitialPosts: ()=>{},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newValue = currPostList;

  if (action.type === "DELETE_CARD") {
    newValue = currPostList.filter((arr) => arr.id !== action.payload.id);
  }
  if(action.type === "ADD_INITIAL_POSTS")
  {
      let myObject={
        id: action.payload.id,
        title: action.payload.postTitle,
        body: action.payload.postBody,
      }
    newValue=[...currPostList,myObject];
  }
  if (action.type === "ADD_CARD") {
    let myObject = {
      id: action.payload.id,
      title: action.payload.postTitle,
      body: action.payload.postBody,
      reactions: action.payload.reactions,
      tags: action.payload.tags,
    };
    newValue = [...currPostList, myObject];
  }

  return newValue;
};

const PostListProvider = ({ children }) => {
  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    let myAddObject = {
      type: "ADD_CARD",
      payload: {
        id: Date.now(),
        postTitle,
        postBody,
        reactions,
        userId,
        tags,
      },
    };
    dispatchPostList(myAddObject);
  };

    const addInitialPosts = (posts) => {
      
    let myAddObject = {
      type: "ADD_INITIAL_POSTS",
      payload: {
        id:posts.id,
        postTitle:posts.title,
        postBody:posts.body,
      },
    };
    console.log(posts.id)
    dispatchPostList(myAddObject);
  };
  const deletePost = (id) => {
    let myDelObject = {
      type: "DELETE_CARD",
      payload: {
        id: id,
      },
    };
    dispatchPostList(myDelObject);
  };

  let [postList, dispatchPostList] = useReducer(postListReducer, []);

  return (
    <PostList.Provider value={{ postList, addPost,addInitialPosts, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
