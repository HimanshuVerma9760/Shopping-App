import "./css/MyProductsCard.css";
import { useLoaderData, Link, Outlet, useNavigate } from "react-router-dom";

export default function Cart({ uid }) {
  const { cartData } = useLoaderData();
  const cartItems = cartData;

  const navigate = useNavigate();

  async function deleteHandler(prodId) {
    try {
      const response = await fetch(
        `http://localhost:3000/cart/delete/${prodId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete item from cart");
      }
      navigate("/cart/my-cart", { replace: true });
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  }

  async function saveLaterHandler(prodId) {
    try {
      const response = await fetch(
        `http://localhost:3000/cart/save-for-later/${uid}`,
        {
          method: "post",
          body: JSON.stringify({ prodId: prodId }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Save later error..!!!");
      }
    } catch (err) {
      console.error("Error saving for later:", err);
    }
  }

  const style = {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    flexWrap: "wrap",
  };
  if (
    cartItems.cartProducts === undefined ||
    cartItems.cartProducts.length === 0
  ) {
    return (
      <div>
        <strong>No items in the cart</strong>
      </div>
    );
  }

  return (
    <>
      <div>
        <div style={style}>
          <h3>
            Total Items: {cartItems.cartQty} with $ {cartItems.totalPrice} to
            Pay
            <div>
              <Link to={`/cart/my-cart/save-for-later/${uid}`}>
                Save For Later
              </Link>
            </div>
          </h3>
        </div>
        <div className="card">
          {cartItems.cartProducts.map((item) => (
            <li key={item.product._id}>
              <img
                src={item.product.url}
                loading="lazy"
                alt={item.product.title}
              />
              <h1>{item.product.title + " - $" + item.product.price}</h1>
              <strong>written by </strong>
              <p>{item.product.author}</p>
              <h3>{item.product.desc}</h3>
              <h2>qty {item.quantity}</h2>
              <div style={style}>
                <button onClick={() => saveLaterHandler(item.product._id)}>
                  Save for later
                </button>
                <button onClick={() => deleteHandler(item.product._id)}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </div>
      </div>
      <Outlet />
    </>
  );
}
