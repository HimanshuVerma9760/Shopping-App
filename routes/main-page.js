const express = require("express");
const mainPage = require("../controllers/product-controller");

const mainRoute = express.Router();

mainRoute.get("/", mainPage.mainPage);

module.exports = mainRoute;
