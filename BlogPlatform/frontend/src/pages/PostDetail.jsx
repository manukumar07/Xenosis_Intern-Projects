import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { usePostContext } from "../context/PostContext";
import CommentSection from "./CommentSection";

const PostDetail = () => {
  const { postId } = useParams();
  const navigate = useNavigate();

  const { posts, deletePost } = usePostContext();
  const post = posts.find((p) => p._id === postId);

  const handleDelete = async () => {
    try {
      await deletePost(postId);
      toast.success("Post successfully deleted!", {
        position: "top-center",
      });
      navigate("/");
    } catch {
      toast.error("Error deleting post.");
    }
  };

  const handleEdit = () => {
    navigate(`/edit/${postId}`);
  };

  return (
    <div className="bg-[#F5F5F5] min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-md">
          {post ? (
            <>
              {/* Post Content */}
              <h2
                className="text-3xl font-semibold"
                style={{ color: "#2C3E50" }}
              >
                {post.title}
              </h2>
              <div className="text-sm" style={{ color: "#7F8C8D" }}>
                <span>By {post.author ? post.author.username : "user"}</span> |
                <span>{new Date(post.date).toLocaleDateString()}</span> at {""}
                <span>{new Date(post.date).toLocaleTimeString()}</span>
              </div>
              <p className="mb-4" style={{ color: "#2C3E50" }}>
                {post.content}
              </p>
              <div className="flex gap-2 mb-4">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs py-1 px-3 rounded-full"
                    style={{
                      backgroundColor: "#2C3E50",
                      color: "white",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Edit and Delete Buttons */}
              <div className="flex justify-end gap-4 mb-6">
                <button
                  onClick={handleEdit}
                  className="px-4 py-2"
                  style={{
                    backgroundColor: "#2C3E50",
                    color: "white",
                    borderRadius: "0.5rem",
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={handleDelete}
                  className="px-4 py-2"
                  style={{
                    backgroundColor: "#E74C3C",
                    color: "white",
                    borderRadius: "0.5rem",
                  }}
                >
                  Delete
                </button>
              </div>
            </>
          ) : (
            <p>Loading...</p>
          )}

          {/* Comment Section */}
          <CommentSection postId={postId} />
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
