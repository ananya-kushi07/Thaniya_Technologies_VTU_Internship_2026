const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());

// Enable CORS for all origins
app.use(cors());

// Example API
app.get("/api/data", (req, res) => {
  res.json({
    message: "CORS is enabled! Data fetched successfully."
  });
});

// Restricted CORS example (only allow specific origin)
const restrictedCors = cors({
  origin: "http://localhost:3000"
});

app.get("/api/secure-data", restrictedCors, (req, res) => {
  res.json({
    message: "This route is only accessible from allowed origin"
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});