const Post = require("../models/postModel");

// Create a new post
const createPost = async (req, res) => {
  try {
    const { title, content, tags } = req.body;
    const newPost = new Post({
      title,
      content,
      tags,
      author: req.user,
    });
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (error) {
    res.status(500).json({ message: "Error creating post", error });
  }
};

// Get all posts without pagination
const getPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate("author", "username");;
    res.json({ msg: "Posts fetched successfully", posts });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "Internal server error." });
  }
};

// Update a post
const editPost = async (req, res) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      { ...req.body, updatedAt: Date.now() },
      { new: true }
    );
    if (!updatedPost)
      return res.status(404).json({ message: "Post not found" });
    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(500).json({ message: "Error updating post", error });
  }
};

// Delete a post
const deletePost = async (req, res) => {
  try {
    const deletedPost = await Post.findByIdAndDelete(req.params.id);
    if (!deletedPost)
      return res.status(404).json({ message: "Post not found" });
    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting post", error });
  }
};

module.exports = { createPost, editPost, getPosts, deletePost };
