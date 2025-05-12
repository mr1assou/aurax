import Post from "./Post";
import axiosInstance from "../../Axios";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

function Posts({ reload}) {
  const [posts, setPosts] = useState([]); // using 'any' for simplicity
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axiosInstance.get('/getPostsById', {
        params: { user_id: id }
      });
      setPosts(response.data.data);
    }
    fetchData();
  }, [reload]);

  return (
    <div>
      {posts.length > 0 && posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Posts;
