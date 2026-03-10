const express = require("express");

const studentRoutes = require("./routes/studentRoutes");

const app = express();

app.use(express.json());

// Use routes
app.use("/api", studentRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});