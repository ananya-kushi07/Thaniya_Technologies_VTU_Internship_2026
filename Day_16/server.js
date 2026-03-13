const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/day16db", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

// Simple Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String
});

const User = mongoose.model("User", userSchema);

// Insert data
app.post("/users", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.json({
    message: "User saved to MongoDB",
    user
  });
});

// Get data
app.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});