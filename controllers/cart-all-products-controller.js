const { Cart } = require("../models/Cart-model");

exports.showCart = async (req, res, next) => {
  try {
    const cart = await Cart.findOne({ owner: req.params.uid }).populate(
      "products.product"
    );
    // console.log("cart qty : " + cart.totalQuantity);
    // console.log("cart Products : " + cart.products);
    const data = {
      cartQty: cart.totalQuantity,
      totalPrice: cart.totalPrice,
      cartProducts: cart.products,
    };
    res.json(data);
  } catch (error) {
    console.log(error);
  }
};
