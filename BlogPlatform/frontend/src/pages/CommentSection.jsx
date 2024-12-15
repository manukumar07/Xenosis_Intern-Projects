import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import Comment from "./Comment";

const CommentSection = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [editingComment, setEditingComment] = useState(null);
  const [updatedComment, setUpdatedComment] = useState("");

  // Fetch comments
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/v1/comments/${postId}`
        );
        setComments(response.data.comments || []);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchComments();
  }, [postId]);

  // Add comment
  const handleAddComment = async () => {
    if (newComment) {
      try {
        const response = await axios.post(
          `http://localhost:5000/api/v1/comments/`,
          {
            content: newComment,
            postId,
          }
        );
        setComments([...comments, response.data.comment]);
        setNewComment("");
        toast.success("Comment added successfully!");
      } catch (error) {
        console.error("Error adding comment:", error);
        toast.error("Failed to add comment.");
      }
    }
  };

  // Delete comment
  const handleDeleteComment = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/v1/comments/${id}`);
      setComments(comments.filter((comment) => comment._id !== id));
      toast.success("Comment deleted successfully!");
    } catch (error) {
      console.error("Error deleting comment:", error);
      toast.error("Failed to delete comment.");
    }
  };

  const handleEditComment = (id, updatedContent) => {
    setEditingComment(id);
    setUpdatedComment(updatedContent);
  };

  // Update comment
  const handleUpdateComment = async (id) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/v1/comments/${id}`,
        {
          content: updatedComment,
        }
      );
      setComments(
        comments.map((comment) =>
          comment._id === id ? response.data.comment : comment
        )
      );
      setEditingComment(null);
      setUpdatedComment("");
      toast.success("Comment updated successfully!");
    } catch (error) {
      console.error("Error updating comment:", error);
      toast.error("Failed to update comment.");
    }
  };

  return (
    <div className="comment-section mt-8">
      <h3 className="text-xl font-semibold mb-4" style={{ color: "#2C3E50" }}>
        Add a Comment
      </h3>
      <textarea
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        className="w-full p-4 border rounded-lg mb-4"
        rows="4"
        placeholder="Write your comment here..."
      />
      <button
        onClick={handleAddComment}
        className="px-4 py-2"
        style={{
          backgroundColor: "#1ABC9C",
          color: "white",
          borderRadius: "0.5rem",
        }}
      >
        Add Comment
      </button>

      <div className="mt-6">
        <h4 className="text-xl font-semibold mb-4" style={{ color: "#2C3E50" }}>
          Comments
        </h4>
        {comments.length > 0 ? (
          <ul className="space-y-4">
            {comments.map((comment) => (
              <Comment
                key={comment._id}
                comment={comment.text}
                onDelete={() => handleDeleteComment(comment._id)}
                onEdit={() => handleEditComment(comment._id, comment.text)}
              />
            ))}
          </ul>
        ) : (
          <p>No comments yet. Be the first to comment!</p>
        )}
      </div>

      {editingComment !== null && (
        <div className="mt-6">
          <h4
            className="text-xl font-semibold mb-4"
            style={{ color: "#2C3E50" }}
          >
            Edit Comment
          </h4>
          <textarea
            value={updatedComment}
            onChange={(e) => setUpdatedComment(e.target.value)}
            className="w-full p-4 border rounded-lg mb-4"
            rows="4"
          />
          <button
            onClick={() => handleUpdateComment(editingComment)}
            className="px-4 py-2"
            style={{
              backgroundColor: "#F39C12",
              color: "white",
              borderRadius: "0.5rem",
            }}
          >
            Update Comment
          </button>
        </div>
      )}
    </div>
  );
};

export default CommentSection;
