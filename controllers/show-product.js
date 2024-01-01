const Product = require("../models/product-model");

exports.showProduct = (req, res, next) => {
  Product.fetchAll()
    .then(([rows, fieldData]) => {
      const itemId = req.params.productId;
      const productDetail = rows.find((prod) => prod.id == itemId);
      console.log(productDetail);
      res.render("product-details", { product: productDetail });
    })
    .catch((err) => console.log(err));
};
