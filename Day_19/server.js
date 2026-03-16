const express = require("express");
const app = express();

app.use(express.json());

// Sample data
let users = [
  { id: 1, name: "Ananya" },
  { id: 2, name: "Rahul" }
];

// GET user by ID
app.get("/users/:id", (req, res, next) => {
  const userId = parseInt(req.params.id);

  const user = users.find(u => u.id === userId);

  if (!user) {
    const error = new Error("User not found");
    error.status = 404;
    return next(error);
  }

  res.json(user);
});

// POST user
app.post("/users", (req, res, next) => {
  const { name } = req.body;

  if (!name) {
    const error = new Error("Name is required");
    error.status = 400;
    return next(error);
  }

  const newUser = {
    id: users.length + 1,
    name
  };

  users.push(newUser);

  res.status(201).json({
    message: "User created",
    user: newUser
  });
});

// Unknown route handler
app.use((req, res, next) => {
  const error = new Error("Route not found");
  error.status = 404;
  next(error);
});

// Error handling middleware
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error"
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});