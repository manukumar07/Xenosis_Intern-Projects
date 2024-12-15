const express = require("express");
const {
  createPost,
  editPost,
  deletePost,
  getPosts,
} = require("../controllers/postController");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, createPost);
router.put("/:id", editPost);
router.delete("/:id", deletePost);
router.get("/", getPosts);

module.exports = router;
