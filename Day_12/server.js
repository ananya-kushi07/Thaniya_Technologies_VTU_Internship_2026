const express = require("express");

const app = express();
app.use(express.json());

// Custom Middleware
const loggerMiddleware = (req, res, next) => {
  console.log(`Request Method: ${req.method}`);
  console.log(`Request URL: ${req.url}`);
  next();
};

app.use(loggerMiddleware);

// Route
app.get("/", (req, res) => {
  res.send("Middleware example working");
});

app.post("/data", (req, res) => {
  res.json({ message: "Data received", data: req.body });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});