const express = require("express");

const app = express();
app.use(express.json());

let users = [];

// GET users
app.get("/users", (req, res) => {
  res.json(users);
});

// POST user
app.post("/users", (req, res) => {
  const user = req.body;
  users.push(user);
  res.status(201).json({ message: "User added", user });
});

// PUT user
app.put("/users/:id", (req, res) => {
  const id = req.params.id;
  users[id] = req.body;
  res.json({ message: "User updated", user: users[id] });
});

// DELETE user
app.delete("/users/:id", (req, res) => {
  const id = req.params.id;
  users.splice(id, 1);
  res.json({ message: "User deleted" });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});