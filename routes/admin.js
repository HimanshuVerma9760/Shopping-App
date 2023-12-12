const express = require("express");

const adminLogin= require('./Login-Auth/admin-login.js');

const routes = express.Router();

routes.use(adminLogin);

routes.get("/admin", (req, res, next) => {
  res.send(
    '<form action="/admin-login" method="POST"><input type="text"><button type="submit">Login</button></form>'
  );
});

module.exports=routes;
