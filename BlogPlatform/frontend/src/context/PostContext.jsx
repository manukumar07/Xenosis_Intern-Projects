import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

// Define the URL for the API endpoint
const API_URL = "http://localhost:5000/api/v1/posts";

const PostContext = createContext();

export const usePostContext = () => {
  return useContext(PostContext);
};

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch all posts
  const getPosts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(API_URL);
      setPosts(response.data.posts);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  //create post
  const createPost = async (newPost) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(API_URL, newPost, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setPosts((prevPosts) => [response.data, ...prevPosts]);
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  // Edit a post
  const editPost = async (id, updatedPost) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, updatedPost);
      setPosts(
        posts.map((post) => (post._id === id ? response.data.post : post))
      );
    } catch (error) {
      console.error("Error editing post:", error);
    }
  };

  // Delete a post
  const deletePost = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setPosts(posts.filter((post) => post._id !== id));
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <PostContext.Provider
      value={{
        posts,
        loading,
        createPost,
        editPost,
        deletePost,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
