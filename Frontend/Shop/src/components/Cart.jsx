import { useEffect, useState } from "react";
import "./css/MyProductsCard.css";

export default function Cart({ uid }) {
  const [cartItems, setCartItems] = useState({
    cartPrice: 0,
    cartQty: 0,
    cartProducts: [],
  });
  const [saveLater, setSaveLater] = useState([]);
  async function saveLaterHandler(prodId) {
    await fetch(`http://localhost:3000/cart/save-for-later/${uid}`, {
      method: post,
      body: JSON.stringify(prodId),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  useEffect(() => {
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

    function fetchSaveForLater() {
      fetch(`http://localhost:3000/cart/save-for-later/${uid}`)
        .then((response) => response.json())
        .then((data) => {
          setSaveLater([...data]);
        })
        .catch((err) => console.log(err));
    }
    fetchCart();
    fetchSaveForLater();
    return () => {};
  }, []);

  const style = {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    flexWrap: "wrap",
  };
  return (
    <>
      <div>
        <div style={style}>
          <h3>
            Total Items: {cartItems.cartQty} with $ {cartItems.cartPrice} to Pay
          </h3>
        </div>
        <div className="card">
          {cartItems.cartProducts.length !== 0
            ? cartItems.cartProducts.map((item) => (
                <li key={item.product._id}>
                  <img src={item.product.url} />
                  <h1>{item.product.title + " - $" + item.product.price}</h1>
                  <strong>writtern by </strong>
                  <p>{item.product.author}</p>
                  <h3>{item.product.desc}</h3>
                  <h2>qty {item.quantity}</h2>
                  <div style={style}>
                    <button onClick={() => saveLaterHandler(item.product._id)}>
                      Save for later
                    </button>
                    <button>Delete</button>
                  </div>
                </li>
              ))
            : "No items in the cart"}
        </div>
      </div>
      <div className="save-later-section">
        <h2 style={style}>
          Saved For Later
        </h2>
        <div className="card">
          {saveLater.length !== 0
            ? saveLater.map((item) => (
                <li key={item._id}>
                  <img src={item.url} />
                  <h1>{item.title + " - $" + item.price}</h1>
                  <strong>writtern by </strong>
                  <p>{item.author}</p>
                  <h3>{item.desc}</h3>
                  <div style={style}>
                    <button>Move to cart</button>
                    <button>Delete</button>
                  </div>
                </li>
              ))
            : "No Save For Later Data.."}
        </div>
      </div>
    </>
  );
}
