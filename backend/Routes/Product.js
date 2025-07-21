// routes/products.js
import { Product } from "../Models/Product.js";

export const handleRoutes = async (req, res) => {
  if (req.method === "GET") {
    const data = await Product.find();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(data));
  }

  if (req.method === "POST") {
    let body = "";
    req.on("data", chunk => (body += chunk));
    req.on("end", async () => {
      const parsed = JSON.parse(body);
      const newProduct = new Product(parsed);
      await newProduct.save();
      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(JSON.stringify(newProduct));
    });
  }
};
