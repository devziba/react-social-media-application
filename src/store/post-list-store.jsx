import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newValue = currPostList;

  if (action.type === "DELETE_CARD") {
    newValue = currPostList.filter((arr) => arr.id !== action.payload.id);
  }
  if (action.type === "ADD_CARD") {
    let myObject = {
      id: action.payload.id,
      title: action.payload.title,
      body: action.payload.body,
      reactions: action.payload.reactions,
      tags: action.payload.tags,
    };
    newValue = [...currPostList, myObject];
  }

  return newValue;
};

const PostListProvider = ({ children }) => {
  const addPost = (post) => {
    let myAddObject = {
      type: "ADD_CARD",
      payload: post,
    };
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
    <PostList.Provider
      value={{ postList, addPost, deletePost }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
