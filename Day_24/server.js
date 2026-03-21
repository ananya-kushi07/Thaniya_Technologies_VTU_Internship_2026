const express = require("express");
require("dotenv").config();

const app = express();
app.use(express.json());

// Use environment variable
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.json({
    message: "Backend deployed successfully (simulated)",
    environment: process.env.NODE_ENV
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});