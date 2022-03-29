const express = require('express');
module.exports = function (app) {
  app.use(express.json({ limit: "50mb" }));

  app.get("/welcome", (req, res) => {
    res.status(200).send("Welcome to HomePage 🙌");
  });

  // This should be the last route else any after it won't work
  app.use("*", (req, res) => {
    res.status(404).json({
      success: "false",
      message: "Page not found",
      error: {
        statusCode: 404,
        message: "You reached a route that is not defined on this server",
      },
    });
  });

  app.post('/' , (req , res)=>{
    res.status(200).send("Welcome to HomePage 🙌");
  })
}