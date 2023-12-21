const http = require("http");
const path = require("path");
const express = require("express");
const shopMainPage = require("./routes/main-page");
const addProduct = require("./routes/add-product");
const proDet = require("./routes/user/details-product");
const myCart = require("./routes/user/add-to-cart");

const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "pug");
app.set("views");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.use(myCart);
app.use(proDet);
app.use(addProduct);
app.use(shopMainPage);

http.createServer(app);
app.listen(3000);
