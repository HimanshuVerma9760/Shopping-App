const fs = require("fs");
const path = require("path");

exports.showProduct = (req, res, next) => {
  const product = JSON.parse(
    fs.readFileSync(path.join(__dirname, "..", "/file/Products.json"))
  );
  const itemId = req.params.productId;
  const productDetail = product.find((prod) => prod.id == itemId);
  console.log(productDetail);
  res.render("product-details", { product: productDetail });
};
