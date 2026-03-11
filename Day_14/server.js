const express = require("express");
const app = express();

app.use(express.json());

// Sample route
app.get("/user/:id", (req, res, next) => {
  const userId = req.params.id;

  if (userId !== "1") {
    const error = new Error("User not found");
    error.status = 404;
    return next(error);
  }

  res.json({ id: 1, name: "Srishti" });
});

// Error handling middleware
app.use((err, req, res, next) => {
  const statusCode = err.status || 500;

  res.status(statusCode).json({
    message: err.message || "Internal Server Error",
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});