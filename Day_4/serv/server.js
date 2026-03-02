// Handling Data, Validation, and Status Codes

const express = require("express");
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Sample data (acts like a database)
let users = [];

// Add a new user
app.post("/users", (req, res) => {
  const { name, email } = req.body;

  // Validation
  if (!name || !email) {
    return res.status(400).json({
      error: "Name and email are required"
    });
  }

  users.push({ name, email });

  res.status(201).json({
    message: "User added successfully",
    users
  });
});

// Get all users
app.get("/users", (req, res) => {
  res.status(200).json(users);
});

// Server start
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});