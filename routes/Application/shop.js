const express = require("express");

const shopCon = require("../../controllers/product-control");

const routes = express.Router();

routes.get("/", shopCon.shopProdGet);

module.exports = routes;
