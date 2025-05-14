// import Post from "./Post";
// import axiosInstance from "../../Axios";
// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// function Posts({ reload }) {
//   const [posts, setPosts] = useState([]); // using 'any' for simplicity
//   const { id } = useParams();

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await axiosInstance.get("/getPostsById", {
//         params: { user_id: id },
//       });
//       setPosts(response.data.data);
//     };
//     fetchData();
//   }, [reload]);

//   return (
//     <div>
//       {posts.length > 0 &&
//         posts.map((post) => <Post key={post.id} post={post} />)}
//     </div>
//   );
// }

// export default Posts;
import React, { useState, useEffect } from "react"; // Make sure to import useState and useEffect
import Post from "./Post"; // Assuming this is the path to your Post component

function Posts({ reload }) {
  // Static mock posts data
  const fakePosts = [
    {
      post_id: 1,
      user_id: 1,
      first_name: "John",
      last_name: "Doe",
      description:
        "This is a sample post description. It could be a photo or a video about something interesting.",
      path_image: "/assets/image2.jpg", // Static image or video
      created_at: "2023-04-25T12:34:56",
    },
    {
      post_id: 2,
      user_id: 2,
      first_name: "Jane",
      last_name: "Doe",
      description: "Another post with a video! #fun #test",
      path_image: "sample-video.mp4", // Static video file
      created_at: "2023-04-26T15:24:11",
    },
  ];

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Simulate loading posts with static data
    setLoading(true);
    setTimeout(() => {
      setPosts(fakePosts);
      setLoading(false);
    }, 1000); // Simulate delay in fetching posts
  }, [reload]); // 'reload' will trigger a re-fetch when passed as prop

  if (loading) {
    return <div>Loading posts...</div>; // Show loading message while fetching
  }

  if (posts.length === 0) {
    return <div>No posts available.</div>; // Show when no posts are found
  }

  return (
    <div>
      {posts.map((post) => (
        <Post key={post.post_id} post={post} /> // Pass each post to Post component
      ))}
    </div>
  );
}

export default Posts;
