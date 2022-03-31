const express = require('express');
module.exports = function (app) {
  app.use(express.json({ limit: "50mb" }));

  app.get("/welcome", (req, res) => {
    res.status(200).send("Welcome to HomePage 🙌");
  });

  app.post('/', (req, res) => {
    res.status(200).send("Welcome to HomePage 🙌");
  });

  // Root route of express app
  app.get("/", (req, res) => {
    res.status(200).send("Welcome to HomePage 🙌");
  });
}