const express = require("express");

const app = express();

app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.send("Day 2 Backend Server Running");
});

// Users route
app.get("/api/users", (req, res) => {
  res.json({
    users: ["Alice", "Bob", "Charlie"]
  });
});

// Products route
app.get("/api/products", (req, res) => {
  res.json({
    products: ["Laptop", "Phone", "Headphones"]
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});