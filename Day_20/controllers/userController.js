const User = require("../models/userModel");

// Register user
exports.registerUser = async (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    const error = new Error("All fields are required");
    error.status = 400;
    return next(error);
  }

  const user = new User({ name, email, password });
  await user.save();

  res.status(201).json({
    message: "User registered",
    user
  });
};

// Get all users
exports.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};