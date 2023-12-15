const express = require("express");
const mainPage = require("../controllers/main-Controller");

const mainRoute = express.Router();

mainRoute.get("/", mainPage.mainPage);

module.exports = mainRoute;
