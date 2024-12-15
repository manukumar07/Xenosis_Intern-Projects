import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { usePostContext } from "../context/PostContext";

const PostList = () => {
  const { posts, loading } = usePostContext();
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;

  // Memoized posts for pagination
  const currentPosts = useMemo(() => {
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    return posts.slice(indexOfFirstPost, indexOfLastPost);
  }, [currentPage, posts]);

  const totalPages = Math.ceil(posts.length / postsPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-[#F5F5F5] min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        <ul className="space-y-4">
          {currentPosts.map((post) => (
            <li
              key={post._id}
              className="bg-white rounded-lg shadow-md p-6 border-l-4 border-[#1ABC9C] transition-transform hover:scale-[1.02]"
            >
              <h2 className="text-2xl font-semibold text-[#2C3E50] mb-2">
                {post.title}
              </h2>
              <p className="text-sm text-[#7F8C8D] mb-4">
                {post.content.length > 100
                  ? post.content.substring(0, 100) + "..."
                  : post.content}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs bg-[#3498DB] text-white py-1 px-3 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="text-sm text-[#7F8C8D] mb-4">
                <span>By {post.author ? post.author.username : "user"}</span> |
                <span>{new Date(post.date).toLocaleDateString()}</span> at
                <span>{new Date(post.date).toLocaleTimeString()}</span>
              </div>

              <div className="flex justify-end">
                <Link
                  to={`/posts/${post._id}`}
                  className="text-[#1ABC9C] font-semibold hover:underline"
                >
                  Read More..
                </Link>
              </div>
            </li>
          ))}
        </ul>

        {/* Pagination Controls */}
        <div className="flex justify-center space-x-4 mt-8">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-[#1ABC9C] text-white rounded-lg disabled:bg-[#BDC3C7] transition"
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber)}
                className={`px-4 py-2 rounded-lg ${
                  pageNumber === currentPage
                    ? "bg-[#3498DB] text-white"
                    : "bg-white text-[#2C3E50] hover:bg-[#1ABC9C] hover:text-white"
                }`}
              >
                {pageNumber}
              </button>
            )
          )}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-[#1ABC9C] text-white rounded-lg disabled:bg-[#BDC3C7] transition"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostList;
