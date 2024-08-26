import express from "express";
import data from "./data.js";
import mongoose from "mongoose";
import userRouter from "./Routers/userRouter.js";
import productRouter from "./Routers/productRouter.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

mongoose
  .connect("mongodb://127.0.0.1:27017/amazonic")
  .then(() => {
    console.log("Databases connection sucessfully ");
  })
  .catch((err) => {
    console.log("Error: " + err.message);
  });

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);

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
