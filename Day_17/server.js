const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/day17db")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Schema
const productSchema = new mongoose.Schema({
  name: String,
  price: Number
});

const Product = mongoose.model("Product", productSchema);

// CREATE
app.post("/products", async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.json({
    message: "Product added",
    product
  });
});

// READ
app.get("/products", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// UPDATE
app.put("/products/:id", async (req, res) => {
  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json({
    message: "Product updated",
    updatedProduct
  });
});

// DELETE
app.delete("/products/:id", async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);

  res.json({
    message: "Product deleted"
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});