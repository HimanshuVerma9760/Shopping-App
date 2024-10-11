const { default: mongoose } = require("mongoose");

const cartSchema = new mongoose.Schema({
  products: [
    {
      product: {
        type: mongoose.Schema.ObjectId,
        ref: "Product",
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        min: 1,
      },
    },
  ],
  totalQuantity: { type: Number, default: 0 },
  totalPrice: { type: Number, default: 0 },
  owner: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
});

exports.Cart = mongoose.model("Cart", cartSchema);
