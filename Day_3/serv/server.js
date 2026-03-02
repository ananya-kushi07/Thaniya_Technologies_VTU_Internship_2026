const express = require("express");

const app = express();

app.use(express.json());

// Custom Middleware
app.use((req, res, next) => {
  console.log(`Request Method: ${req.method} | URL: ${req.url}`);
  next();
});

// Home route
app.get("/", (req, res) => {
  res.send("Day 3 Server Running with Middleware");
});

// API route
app.get("/api/data", (req, res) => {
  res.json({
    message: "Middleware executed successfully"
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});