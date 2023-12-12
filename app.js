const http = require("http");

const express = require("express");

const shop = require("./routes/shop");
const admin = require("./routes/admin");

const app = express();

app.use(admin);
app.use(shop);

http.createServer(app);

app.listen(3000);
