const User = require("../models/userModel");
const sendResponse = require("../utils/responseHandler");

// Get users
exports.getUsers = async (req, res) => {
  const users = await User.find();
  sendResponse(res, 200, "Users fetched successfully", users);
};

// Add user
exports.addUser = async (req, res, next) => {
  const { name, email } = req.body;

  if (!name || !email) {
    const error = new Error("Name and email are required");
    error.status = 400;
    return next(error);
  }

  const user = new User({ name, email });
  await user.save();

  sendResponse(res, 201, "User created successfully", user);
};