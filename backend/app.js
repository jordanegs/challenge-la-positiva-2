const express = require("express");
const app = express();

const products = [
  { productId: 1, title: "Title 01" },
  { productId: 2, title: "Title 02" },
];

app.get("/products", (req, res) => {
  res.json(products);
});

const port = 4000;
app.listen(port, () => {
  console.log(`Backend is running on http://localhost:${port}`);
});
