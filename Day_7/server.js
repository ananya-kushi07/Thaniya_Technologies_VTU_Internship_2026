const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const app = express();
app.use(express.json());

const SECRET_KEY = "mysecretkey";

// Dummy user database
const users = [];

// Register route
app.post("/register", async (req, res) => {
  const { username, password, role } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  users.push({
    username,
    password: hashedPassword,
    role,
  });

  res.json({ message: "User registered successfully" });
});

// Login route
app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = users.find((u) => u.username === username);

  if (!user) return res.status(404).json({ message: "User not found" });

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

  const token = jwt.sign(
    { username: user.username, role: user.role },
    SECRET_KEY,
    { expiresIn: "1h" }
  );

  res.json({ message: "Login successful", token });
});

// Authentication middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.status(403).json({ message: "Token required" });

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid token" });

    req.user = user;
    next();
  });
};

// Authorization middleware
const authorizeRole = (role) => {
  return (req, res, next) => {
    if (req.user.role !== role) {
      return res.status(403).json({ message: "Access denied" });
    }
    next();
  };
};

// Protected routes
app.get("/admin", authenticateToken, authorizeRole("admin"), (req, res) => {
  res.json({ message: "Welcome Admin" });
});

app.get("/user", authenticateToken, (req, res) => {
  res.json({ message: "Welcome User" });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});