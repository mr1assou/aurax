import React, { useEffect, useState } from 'react';
import { FaRegHeart, FaHeart, FaRegComments, FaRegShareSquare } from 'react-icons/fa';
import { CiLocationArrow1 } from "react-icons/ci";
import axiosInstance from '../../Axios';

function Post({ post }) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(300);
  const [showCommentInput, setShowCommentInput] = useState(false);
  const [comment, setComment] = useState("");
  const [commented, setCommented] = useState(false);
  const [allCommentsVisible, setAllCommentsVisible] = useState(false);
  const [comments, setComments] = useState([]);
  const [showShareModal, setShowShareModal] = useState(false);
  const [copied, setCopied] = useState(false);

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

  const toggleLike = () => {
    setLiked((prev) => !prev);
    setLikeCount((prev) => (liked ? prev - 1 : prev + 1));
  };

  const toggleCommentInput = () => {
    setShowCommentInput((prev) => !prev);
    setCommented((prev) => !prev);
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (comment.trim()) {
      try {
        await axiosInstance.post('/addComment', {
          post_id: post.post_id,
          user_id: post.user_id,
          comment: comment
        });
        setComment("");
        setShowCommentInput(false);
        const response = await axiosInstance.get('/getComments', {
          params: { post_id: post.post_id }
        });
        setComments(response.data.data);
      } catch (error) {
        console.error("Error submitting comment:", error);
      }
    }
  };

  const handleSharePost =async () => {
    const response = await axiosInstance.post('/sharePost',{path_image:post.path_image,description:post.description});
    setShowShareModal(false);
  };

  return (
    <div className="w-full max-w-2xl mx-auto xl:pt-4 shadow-lg bg-black">
      <div className="mt-5 border border-grey py-5">
        {/* User Info */}
        <div className="flex items-center px-5">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img src="/assets/login_image.jpg" alt="Profile" className="w-full h-full object-cover" />
          </div>
          <div className="ml-3 flex flex-col">
            <p className="text-white font-semibold text-sm">{post.first_name} {post.last_name}</p>
            <small className="text-grey text-xs">Published: {post.created_at}</small>
          </div>
        </div>

        {/* Description */}
        <p className="mt-4 text-white text-xs leading-5 px-5">{post.description}</p>

        {/* Image */}
        {post.path_image !== "assets/undefined" && (
          <div className="mt-4 h-[500px] lg:w-[70%] w-full px-5">
            <img
              src={`${imageLink}/${post.path_image}`}
              alt="Post"
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
        )}

        {/* Buttons */}
        <div className="mt-3 flex items-center gap-10 p-5">
          <div onClick={toggleLike} className="cursor-pointer flex items-center gap-2">
            {liked ? <FaHeart className="text-brown xl:text-2xl" /> : <FaRegHeart className="text-grey xl:text-2xl" />}
            <p className={`text-sm ${liked ? 'text-brown' : 'text-grey'}`}>{likeCount}</p>
          </div>

          <div onClick={toggleCommentInput} className="cursor-pointer flex items-center gap-2">
            <FaRegComments className={`xl:text-2xl ${commented ? 'text-brown' : 'text-grey'}`} />
            <p className="text-grey text-sm">{comments.length}</p>
          </div>

          <div
            onClick={() => setShowShareModal(true)}
            className="cursor-pointer flex items-center gap-2"
          >
            <FaRegShareSquare className="text-grey xl:text-2xl" />
            <p className="text-grey text-sm">500</p>
          </div>
        </div>

        {/* Comment Input */}
        {showCommentInput && (
          <form onSubmit={handleCommentSubmit} className="flex gap-2 items-center p-2">
            <input
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Write a comment..."
              className="flex-1 px-3 py-2 rounded bg-black text-white w-[70%] border border-gray-700"
            />
            <button type="submit" className="text-white px-4 py-2 rounded">
              <CiLocationArrow1 className="text-2xl text-brown" />
            </button>
          </form>
        )}

        {/* Show 2 Comments Only */}
        <div className="px-5 space-y-4 mt-5">
          {comments.length > 0 && comments.slice(0, 2).map((comment) => (
            <div key={comment.comment_id} className="flex items-center">
              <div className="w-7 h-7 lg:w-10 lg:h-10 rounded-full overflow-hidden">
                <img src="/assets/login_image.jpg" alt="Profile" className="w-full h-full object-cover" />
              </div>
              <div className="ml-3 flex flex-col">
                <p className="text-white font-semibold text-sm">{comment.first_name} {comment.last_name}</p>
                <small className="text-grey text-[9px]">Published: {post.created_at}</small>
                <p className="text-grey font-semibold text-xs mt-2">{comment.description}</p>
              </div>
            </div>
          ))}

          {comments.length > 2 && (
            <button
              onClick={() => setAllCommentsVisible(true)}
              className="text-sm text-brown underline mt-2"
            >
              Show all comments
            </button>
          )}
        </div>
      </div>

      {/* Comments Modal */}
      {allCommentsVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-[90%] max-w-xl max-h-[80vh] overflow-y-auto">
            <h2 className="text-black text-lg font-semibold mb-4">All Comments</h2>
            {comments.map((comment) => (
              <div key={comment.comment_id} className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img src="/assets/login_image.jpg" alt="Profile" className="w-full h-full object-cover" />
                </div>
                <div className="ml-3">
                  <p className="text-black font-semibold text-sm">{comment.first_name} {comment.last_name}</p>
                  <small className="text-grey text-xs">Published: {post.created_at}</small>
                  <p className="text-gray-700 text-sm">{comment.description}</p>
                </div>
              </div>
            ))}
            <button
              onClick={() => setAllCommentsVisible(false)}
              className="mt-4 bg-black text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Share Modal */}
      {showShareModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-[90%] max-w-lg">
            <h2 className="text-lg font-bold text-black mb-4">Share This Post</h2>
            <p className="text-gray-800 mb-4">{post.description}</p>
            {post.path_image !== "assets/undefined" && (
              <img
                src={`${imageLink}/${post.path_image}`}
                alt="Post"
                className="rounded-lg w-full max-h-80 object-cover mb-4"
              />
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
  );
}

export default Post;
