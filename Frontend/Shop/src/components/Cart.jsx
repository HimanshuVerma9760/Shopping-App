import "./css/MyProductsCard.css";
import { useLoaderData, Link } from "react-router-dom";

export default function Cart({ uid }) {
  const cartItems = useLoaderData();

  function saveLaterHandler(prodId) {
    fetch(`http://localhost:3000/cart/save-for-later/${uid}`, {
      method: "post",
      body: JSON.stringify(prodId),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("save later error..!!!");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

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
            Total Items: {cartItems.cartQty} with $ {cartItems.totalPrice} to
            Pay
            <div>
              <Link to={`save-for-later/${"66f44dfed6b40e6958dfbd49"}`}>
                Save for Later
              </Link>
            </div>
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
    </>
  );
}
