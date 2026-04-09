const express = require("express");
const app = express();

app.use(express.json());

// Sample data
let products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Phone", price: 20000 },
  { id: 3, name: "Tablet", price: 30000 }
];

// GET products with search and sorting
app.get("/products", (req, res) => {
  let result = [...products];

  // Search
  if (req.query.search) {
    result = result.filter(p =>
      p.name.toLowerCase().includes(req.query.search.toLowerCase())
    );
  }

  // Sorting
  if (req.query.sort === "asc") {
    result.sort((a, b) => a.price - b.price);
  } else if (req.query.sort === "desc") {
    result.sort((a, b) => b.price - a.price);
  }

  res.json(result);
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});