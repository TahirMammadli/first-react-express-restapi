import axios from "axios";
import React, { useState, useEffect } from "react";
import Post from "./components/Post";
import Modal from "./Modal";

function App() {
  const [isOpen, setModalState] = useState(false);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // FORM VALUE STATES
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const postsArr = posts.posts;
  const getPosts = async () => {
    const response = await axios.get("http://localhost:8080/posts");
    const posts = await response.data;

    setPosts(posts);
    setLoading(false);
  };

  const postPosts = (e) => {
    e.preventDefault();

    axios({
      method: "post",
      url: "http://localhost:8080/posts",
      data: { title, content },
    })
      .then((message) => console.log(message))
      .catch((err) => console.log(err));

      setModalState(false)
  };


  const deletePost = (postId) => {
    
  }





  useEffect(() => {
    getPosts();
  }, []);

  if (loading) {
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    );
  }

  return (
    <>
      <button onClick={() => setModalState(true)}>New Post</button>
      <Modal open={isOpen} onClose={() => setModalState(false)}>
        <form action="">
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="content">Content: </label>
          <input
            type="text"
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button type="submit" onClick={postPosts}>
            Add Post
          </button>
        </form>
      </Modal>
      <Post posts={postsArr} />
    </>
  );
}

export default App;
