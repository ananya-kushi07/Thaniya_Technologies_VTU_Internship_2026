const User = require("../models/userModel");

// Create User
exports.createUser = async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.json(user);
};

// Get All Users
exports.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

// Update User
exports.updateUser = async (req, res) => {
  const updatedUser = await User.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updatedUser);
};

// Delete User
exports.deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted successfully" });
};