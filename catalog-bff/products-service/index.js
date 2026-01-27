const express = require("express");
const app = express();

app.use(express.json());

const products = [
  {
    id: "sku-001",
    name: "Wireless Mouse",
    description: "Ergonomic wireless mouse",
    price: 29.99,
  },
];

app.get("/products", (req, res) => {
  res.json(products);
});

app.post("/products", (req, res) => {
  const idExists = products.find((p) => p.id === req.body.id);
  if (idExists) return res.status(409).send("Product exists");

  products.push(req.body);
  res.status(201).end();
});

app.listen(3000, () => console.log("Products service is running on 3000"));
