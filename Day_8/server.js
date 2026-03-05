const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/internshipDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

console.log("MongoDB Connected");

// Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  role: String,
});

// Model
const User = mongoose.model("User", userSchema);

// Save user
app.post("/add-user", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.json({ message: "User saved successfully", user });
});

// Get users
app.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});