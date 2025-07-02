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
    let myObject={
      id:action.payload.id,
      title:action.payload.postTitle,
      body:action.payload.postBody,
      reactions:action.payload.reactions,
      tags:action.payload.tags,
    }
    newValue=[...currPostList,myObject]
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
  const deletePost = (id) => {
    let myDelObject = {
      type: "DELETE_CARD",
      payload: {
        id: id,
      },
    };
    dispatchPostList(myDelObject);
  };

  let [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Mumbai",
    body: "Hi Friends I am Going to Mumbai for my Vacations. Hope to enjoy a lot. Peace out",
    reactions: 2,
    userId: "user-9",
    tags: ["vacation", "Mumbai", "Enjoying", "hi", "hello"],
  },
  {
    id: "2",
    title: "Paas ho gaye Bhai",
    body: "4 saal ki masti ke baad bhi ho gaye hai pass. hard to believe",
    reactions: 15,
    userId: "user-12",
    tags: ["Graduating", "Unbelievable"],
  },
];

export default PostListProvider;
