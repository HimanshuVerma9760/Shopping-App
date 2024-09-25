const { Product } = require("../models/product-model");

exports.getProduct = async (req, res, next) => {
  const result = await Product.find().exec();
  res.json(result);
};
exports.postProduct = (req, res, next) => {
  const newProduct = new Product({
    title: req.body.title,
    author: req.body.author,
    url: req.body.url,
    price: req.body.price,
    desc: req.body.desc,
    qty: req.body.qty,
  });
  newProduct
    .save()
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => console.log(err));
};
