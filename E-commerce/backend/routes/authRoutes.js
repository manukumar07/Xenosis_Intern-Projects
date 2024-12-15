const express = require("express");
const { signup, login, logout } = require("../controller/authController");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

// Routes
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

module.exports = router;
