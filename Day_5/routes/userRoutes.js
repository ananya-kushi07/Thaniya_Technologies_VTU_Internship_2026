// User routes

const express = require("express");
const router = express.Router();

const {
  getUsers,
  addUser
} = require("../controllers/userController");

// GET all users
router.get("/", getUsers);

// POST new user
router.post("/", addUser);

module.exports = router;