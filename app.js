const express = require("express");
const cors = require("cors");
const homePage = require("./routes/main-page");
const addProduct = require("./routes/add-product");
// const proDet = require("./routes/user/details-product");
const myCart = require("./routes/user/cart-route");

const bodyParser = require("body-parser");
const db = require("./util/db_connect");

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use("/cart", myCart);
// app.use(proDet);
app.use("/product", addProduct);
app.use("/", homePage.getProductRoute);

db();
app.listen(3000);
