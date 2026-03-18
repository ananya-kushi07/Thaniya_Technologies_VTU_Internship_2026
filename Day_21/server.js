const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/day21db")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.use("/users", userRoutes);

// Central error handler
app.use(errorHandler);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});