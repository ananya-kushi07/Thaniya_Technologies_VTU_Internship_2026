// Import express
const express = require("express");

// Create express app
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Basic route
app.get("/", (req, res) => {
  res.send("Backend Server is Running Successfully!");
});

// Sample API route
app.get("/api/message", (req, res) => {
  res.json({ message: "Welcome to Backend Development" });
});

// Server port
const PORT = 5000;

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});