const express = require("express");

const routes = express.Router();

routes.post("/admin-login", (req, res, next) => {
  res.send("<h1>Welcome Admin!!</h1>");
});

module.exports = routes;
