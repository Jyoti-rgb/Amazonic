import express from "express";
import data from "./data.js";
import mongoose from "mongoose";
import userRouter from "./Routers/userRouter.js";
const app = express();

app.use(express.static("public"));

mongoose.connect("mongodb://127.0.0.1:27017/amazonic");

app.get("/api/products/:id", (req, res) => {
  const product = data.products.find((x) => x._id === req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product Not Found" });
  }
});
app.get("/api/products", (req, res) => {
  res.send(data.products);
});
app.use("/api/users", userRouter);

app.get("/", (req, res) => {
  res.send("Hello web Server");
});
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.Port || 5000;
app.listen(port, (req, res) => {
  console.log(`Server have started on ${port} port `);
});
