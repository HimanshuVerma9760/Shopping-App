import { useEffect, useState } from "react";

export default function Cart({ uid, fetchImportantData }) {
  const [cartItems, setCartItems] = useState({
    cartPrice: 0,
    cartQty: 0,
    cartProducts: [],
  });

  function fetchCart() {
    fetch(`http://localhost:3000/cart/my-cart/${uid}`)
      .then((response) => response.json())
      .then((data) => {
        setCartItems({
          ...cartItems,
          cartProducts: [...data.cartProducts],
          cartPrice: data.totalPrice,
          cartQty: data.cartQty,
        });
      })
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    fetchCart();
  }, []);
  return (
    <>
      <div>
        <h3>
          Total Items: {cartItems.cartQty} with $ {cartItems.cartPrice} to Pay
        </h3>
        {cartItems.cartProducts.length !== 0
          ? cartItems.cartProducts.map((item) => (
              <li key={item.product._id}>
                <img src={item.product.url} />
                <h3>{item.product.title + " $" + item.product.price}</h3>
                <strong>writtern by </strong>
                <p>{item.product.author}</p>
                <p>{item.product.desc}</p>
                <strong>qty {item.quantity}</strong>
                <div>
                  <button>remove item</button>
                </div>
              </li>
            ))
          : "No items in the cart"}
      </div>
    </>
  );
}
