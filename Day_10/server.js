const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/internshipDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

console.log("MongoDB Connected");

app.use("/api", userRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});