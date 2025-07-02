import { useContext } from "react";
import { IoCloseSharp } from "react-icons/io5";

import { PostList } from "../store/post-list-store";
function Post({ post }) {
    let { deletePost } =useContext(PostList);

  return (
    <div className="card post-card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          onClick={()=>deletePost(post.id)}
          >
            
            <IoCloseSharp />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((element) => (
          <span key={element} className="badge text-bg-primary tags">{element}</span>
        ))}
        <div className="alert alert-success reactions" role="alert">
 this post has been reacted by {post.reactions} people.
</div>
      </div>
    </div>
  );
}
export default Post;
