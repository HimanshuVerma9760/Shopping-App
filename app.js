const http = require("http");
const path = require("path");
const express = require("express");
const shopMainPage = require("./routes/main-page");

const app = express();

app.set("view engine", "pug");
app.set("views");

app.use(express.static(path.join(__dirname, "public")));
app.use(shopMainPage);
http.createServer(app);
app.listen(3000);
