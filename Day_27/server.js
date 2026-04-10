const express = require("express");
const app = express();

app.use(express.json());

// Sample data
let items = [];
for (let i = 1; i <= 50; i++) {
  items.push({ id: i, name: `Item ${i}` });
}

// Pagination API
app.get("/items", (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 5;

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const result = items.slice(startIndex, endIndex);

  res.json({
    page,
    limit,
    totalItems: items.length,
    data: result
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});