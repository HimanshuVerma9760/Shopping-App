const { Cart } = require("../models/Cart-model");
const { Product } = require("../models/product-model");

exports.searchCart = async (req, res, next) => {
  const id = req.params.prodId;

  try {
    const cart = await Cart.find({ "products.product": id });
    if (!cart) {
      return res.json({ message: "Cart Item not found..!!" });
    }
    const cartItem = cart.find((item) => item.products.toString() === id);
    res.json(cartItem);
  } catch (error) {
    console.log(error);
  }
};

exports.addToCart = async (req, res, next) => {
  const prodId = req.params.itemId;
  const userId = req.params.uid;

  const prod = await Product.findById(prodId);

  const prodPrice = prod.price;

  const user = await Cart.findOne({
    owner: userId,
  });

  if (user) {
    const productIndex = await user.findIndex(
      (item) => item.products.toString() === prodId
    );
    if (productIndex > -1) {
      user.products[productIndex].quantity++;
      user.totalPrice += prodPrice;
    } else {
      user.products.push({ product: prodId, quantity: 1 });
    }
    user.totalQuantity++;
    user.save();
  } else {
    const newCart = new Cart({
      products: {
        product: prodId,
        quantity: 1,
      },
      totalQuantity: 1,
      totalPrice: prodPrice,
      owner: userId
    });
    newCart.save();
  }
};
