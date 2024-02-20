import express from "express";
import data from "./data.js";
// const express = require("express");
// const data = require("./data");
const app = express();

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.get("/", (req, res) => {
  res.send("Hello web Server");
});

app.listen("5000", (req, res) => {
  console.log("Server have started on 5000 port");
});
