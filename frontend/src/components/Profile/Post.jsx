import React, { useEffect, useState } from 'react';
import { FaRegHeart, FaHeart, FaRegComments, FaRegShareSquare } from 'react-icons/fa';
import { CiLocationArrow1 } from "react-icons/ci";
import axiosInstance from '../../Axios';
import imageLink from '../ImageLink';
import { Link } from 'react-router-dom';

function Post({ post }) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [showCommentInput, setShowCommentInput] = useState(false);
  const [comment, setComment] = useState("");
  const [commented, setCommented] = useState(false);
  const [allCommentsVisible, setAllCommentsVisible] = useState(false);
  const [comments, setComments] = useState([]);
  const [showShareModal, setShowShareModal] = useState(false);
  const [copied, setCopied] = useState(false);

  // Determine if the media is a video
  const isVideo = post.path_image && 
    post.path_image.match(/\.(mp4|webm|ogg|mov|avi|wmv)$/i);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axiosInstance.get('/getComments', {
          params: { post_id: post.post_id }
        });
        setComments(response.data.data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchComments();
  }, [post.post_id]);

  // Keep the rest of your existing functions unchanged

  return (
    <div className="w-full max-w-2xl mx-auto xl:pt-4 shadow-lg bg-black">
      <div className="mt-5 border border-grey py-5">
        {/* User Info */}
        <div className="flex items-center px-5">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img src="/assets/login_image.jpg" alt="Profile" className="w-full h-full object-cover" />
          </div>
          <Link to={`/profile/${post.user_id}`} className="ml-3 flex flex-col">
            <p className="text-white font-semibold text-sm">{post.first_name} {post.last_name}</p>
            <small className="text-grey text-xs">Published: {post.created_at}</small>
          </Link>
        </div>

        {/* Description */}
        <p className="mt-4 text-white text-xs leading-5 px-5">{post.description}</p>

        {/* Media Display */}
        {post.path_image && post.path_image !== "assets/undefined" && (
          <div className="mt-4 h-[500px] lg:w-[70%] w-full px-5">
            {isVideo ? (
              <video
                controls
                className="rounded-lg w-full h-full object-cover"
              >
                <source src={`${imageLink}/${post.path_image}`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={`${imageLink}/${post.path_image}`}
                alt="Post"
                className="rounded-lg w-full h-full object-cover"
              />
            )}
          </div>
        )}

        {/* Keep the rest of your existing JSX */}

        {/* Updated Share Modal */}
        {showShareModal && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-[90%] max-w-lg">
              <h2 className="text-lg font-bold text-black mb-4">Share This Post</h2>
              <p className="text-gray-800 mb-4">{post.description}</p>
              {post.path_image && post.path_image !== "assets/undefined" && (
                isVideo ? (
                  <video
                    controls
                    className="rounded-lg w-full max-h-80 object-cover mb-4"
                  >
                    <source src={`${imageLink}/${post.path_image}`} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    src={`${imageLink}/${post.path_image}`}
                    alt="Post"
                    className="rounded-lg w-full max-h-80 object-cover mb-4"
                  />
                )
              )}
              <button
                onClick={handleSharePost}
                className="bg-black text-white px-4 py-2 rounded"
              >
                {copied ? "Link Copied!" : "Share Post"}
              </button>
              <button
                onClick={() => setShowShareModal(false)}
                className="ml-4 text-black underline"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Post;