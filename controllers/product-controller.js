const Product = require("../models/product-model");

exports.getProduct = (req, res, next) => {
  res.render("add-product");
};
exports.postProduct = (req, res, next) => {
  const newProduct = new Product(
    req.body.title,
    req.body.author,
    req.body.url,
    req.body.price,
    req.body.desc
  );
  newProduct.save().then(()=>{
    res.redirect("/");
  }).catch(err=>console.log(err));
};
exports.mainPage = (req, res, next) => {
  Product.fetchAll()
    .then(([rows, fieldData]) => {
      res.render("mainPage", { Books: rows });
    })
    .catch((err) => console.log(err));
};
