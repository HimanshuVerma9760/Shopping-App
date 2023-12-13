const http = require("http");

const express = require("express");
const bodyParser = require("body-parser");

const shop = require("./routes/Application/shop");
const addProduct = require("./routes/Application/add-product");

const app = express();

app.set('view engine', 'pug');
app.set('views');

app.use(bodyParser.urlencoded({ extended: false }));


app.use(addProduct.routes);
app.use(shop);

http.createServer(app);

app.listen(3000);
