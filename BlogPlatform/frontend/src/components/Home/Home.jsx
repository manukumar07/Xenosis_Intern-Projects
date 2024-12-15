import { usePostContext } from "../../context/PostContext";
import PostList from "../../pages/PostList";

const Home = () => {
  const { posts, loading } = usePostContext();

  return (
    <div className="min-h-screen p-4">
      <h1 className="text-4xl font-bold text-center text-[#1ABC9C] mb-6">
        Latest <span className="text-4xl text-[#F39C12]">Posts</span>
      </h1>

      {/* Conditional rendering to show loading state */}
      {loading ? <p>Loading posts...</p> : <PostList posts={posts} />}
    </div>
  );
};

export default Home;
