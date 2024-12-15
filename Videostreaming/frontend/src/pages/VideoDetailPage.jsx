import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
import { ThumbsUp, ThumbsDown, Share2 } from "react-feather";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

// VideoDetailPage Component
const VideoDetailPage = () => {
  const location = useLocation();
  const video = location.state || {};
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [commentError, setCommentError] = useState("");

  const validateComment = () => {
    if (!newComment.trim()) {
      setCommentError("Comment cannot be empty");
      return false;
    }
    if (newComment.length > 500) {
      setCommentError("Comment must be less than 500 characters");
      return false;
    }
    setCommentError("");
    return true;
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    if (!validateComment()) return;
    const commentToAdd = {
      id: comments.length + 1,
      user: "Current User",
      avatar: "/api/placeholder/50/50",
      text: newComment,
      likes: 0,
      timestamp: "Just now",
    };
    setComments([commentToAdd, ...comments]);
    setNewComment("");
    toast.success("Comment added!");
  };

  const handleDeleteComment = (commentId) => {
    setComments(comments.filter((comment) => comment.id !== commentId));
    toast.success("Comment deleted!");
  };

  const handleEditComment = (commentId, newText) => {
    const updatedComments = comments.map((comment) =>
      comment.id === commentId ? { ...comment, text: newText } : comment
    );
    setComments(updatedComments);
    toast.success("Comment updated!");
  };

  // Handling like button click
  const handleLike = () => {
    setVideo((prevState) => ({
      ...prevState,
      likes: prevState.likes + 1,
    }));
    toast.success("You liked this video!");
  };

  // Handling dislike button click
  const handleDislike = () => {
    setVideo((prevState) => ({
      ...prevState,
      dislikes: prevState.dislikes + 1,
    }));
    toast.error("You disliked this video!");
  };

  // Handling share button click
  const handleShare = () => {
    setVideo((prevState) => ({
      ...prevState,
      shares: prevState.shares + 1,
    }));
    toast("Video shared!", {
      icon: "📤",
      style: {
        background: "#333",
        color: "#fff",
      },
    });
  };

  return (
    <div className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-10 flex">
        {/* Main Video Section (Left side) */}
        <div className="w-2/3 pr-8">
          {/* Video Player */}
          <div className="bg-black rounded-xl overflow-hidden mb-6">
            <ReactPlayer
              url={video.videoSrc} // Dynamic video URL
              controls
              width="100%"
              height="450px"
            />
          </div>

          {/* Video Details */}
          <div className="mb-6">
            <h1 className="text-xl font-bold mb-4">{video.title}</h1>
            <h2 className="text-lg mb-4">{video.description}</h2>
            <div className="flex justify-between items-center mb-4">
              <div className="flex space-x-4 ml-auto">
                <button
                  onClick={handleLike}
                  className="flex items-center space-x-2 hover:text-purple-500"
                >
                  <ThumbsUp className="w-5 h-5" />
                  <span>{video.likes}</span>
                </button>
                <button
                  onClick={handleDislike}
                  className="flex items-center space-x-2 hover:text-red-500"
                >
                  <ThumbsDown className="w-5 h-5" />
                  <span>{video.dislikes}</span>
                </button>
                <button
                  onClick={handleShare}
                  className="flex items-center space-x-2 hover:text-blue-500"
                >
                  <Share2 className="w-5 h-5" />
                  <span>{video.shares}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Comment Section */}
          <div>
            <h2 className="text-2xl font-bold mb-6">
              Comments ({comments.length})
            </h2>
            <form onSubmit={handleAddComment} className="mb-6">
              <div className="flex space-x-4">
                <input
                  type="text"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Add a comment..."
                  className="flex-1 p-3 bg-gray-800 rounded-lg"
                />
                <button
                  type="submit"
                  className="bg-purple-600 px-6 py-3 rounded-lg hover:bg-purple-700 transition"
                >
                  <span className="flex items-center">Comment</span>
                </button>
              </div>
              {commentError && (
                <p className="text-red-500 text-sm mt-2">{commentError}</p>
              )}
            </form>

            <div className="space-y-4">
              {comments.map((comment) => (
                <div
                  key={comment.id}
                  className="bg-gray-800 p-4 rounded-lg flex"
                >
                  <img
                    src={comment.avatar}
                    alt={comment.user}
                    className="w-10 h-10 rounded-full mr-4"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <div>
                        <span className="font-semibold mr-2">
                          {comment.user}
                        </span>
                        <span className="text-gray-400 text-sm">
                          {comment.timestamp}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          className="text-gray-400 border border-gray-500 hover:bg-blue-500 hover:text-white px-4 py-2 rounded-lg transition"
                          onClick={() =>
                            handleEditComment(
                              comment.id,
                              prompt("Edit comment", comment.text)
                            )
                          }
                        >
                          Edit
                        </button>
                        <button
                          className="text-red-500 border border-red-600 hover:bg-red-600 hover:text-white px-4 py-2 rounded-lg transition"
                          onClick={() => handleDeleteComment(comment.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                    <p>{comment.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default VideoDetailPage;
