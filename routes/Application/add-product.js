const express = require("express");
const routes = express.Router();

const productCon = require("../../controllers/product-control");

routes.post("/add-product", productCon.prodsPost);
routes.get("/add-product", productCon.prodsGet);

module.exports = routes;
