const { Cart } = require("../models/Cart-model");

exports.showCart = async (req, res, next) => {
  try {
    const cart = await Cart.findOne({ owner: req.params.uid }).populate(
      "products.product"
    );
    if (cart) {
      const data = {
        cartQty: cart.totalQuantity,
        totalPrice: cart.totalPrice,
        cartProducts: cart.products,
      };
      res.json(data);
    }
    res.json({ message: "Error in cart controller..!!" });
  } catch (error) {
    console.log(error);
  }
};
