// Day 5: Express server with routes and controllers

const express = require("express");
const app = express();

app.use(express.json());

// Import routes
const userRoutes = require("./routes/userRoutes");

// Use routes
app.use("/users", userRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});