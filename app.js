const http = require("http");

const express = require("express");

const shop=require('./routes/Application/shop');
const addProduct=require('./routes/Application/add-product');

const app = express();

app.use(addProduct);
app.use(shop);

http.createServer(app);

app.listen(3000);
