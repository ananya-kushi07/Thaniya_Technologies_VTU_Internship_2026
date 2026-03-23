import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import profileRoutes from "./routes/profileRoutes.js";


// Load env FIRST
dotenv.config();

// Connect DB
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use("/api/profile", profileRoutes);
// Test route
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

// Test API route
app.get("/api/test", (req, res) => {
  res.json({ message: "Backend working ✅" });
});

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});