import Post from "./Post";
import axiosInstance from "../../Axios";
import { useState, useEffect } from "react";

function Posts({reload}) {
  const [posts, setPosts] = useState([]); // using 'any' for simplicity
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axiosInstance.get('/getPosts');
        setPosts(response.data.data);
      } catch (error) {
        console.error('Upload error:', error);
      }
    };

    fetchPosts();
  }, [reload]);
  return (
    <div>
      {posts.length>0 &&  posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Posts;
