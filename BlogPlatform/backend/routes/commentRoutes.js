const express = require("express");
const router = express.Router();
const { createComment, getCommentsByPost, editComment, deleteComment } = require("../controllers/commentController");
const protect = require("../middleware/authMiddleware");

router.post("/", protect, createComment);
router.get("/:postId", getCommentsByPost);
router.put("/:commentId", protect, editComment);
router.delete("/:commentId", protect, deleteComment);

module.exports = router;
