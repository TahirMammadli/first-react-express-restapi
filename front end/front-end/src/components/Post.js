import React from "react";

const Post = ({ posts }) => {



  return (
    <div>
      {posts.map((post) => {
        const { title, userId, body } = post;
        return (
          <div>
            <ul>
              <li>{userId}</li>
              <li>{title}</li>
              <li>{body}</li>
            </ul>
            <button onClick={() => deletePost(postId)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default Post;
