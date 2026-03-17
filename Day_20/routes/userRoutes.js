const express = require("express");
const router = express.Router();
const controller = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");

// Public route
router.post("/register", controller.registerUser);

// Protected route
router.get("/", authMiddleware, controller.getUsers);

module.exports = router;