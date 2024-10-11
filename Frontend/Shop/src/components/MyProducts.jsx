import { useLoaderData } from "react-router-dom";
import "./css/MyProductsCard.css";

export default function MyProducts({ uid }) {
  const myProds = useLoaderData();

  async function addToCart(prodId) {
    const data = {
      itemId: prodId,
      uid: uid,
    };
    try {
      await fetch("http://localhost:3000/cart/add-to-cart", {
        method: "post",
        body: JSON.stringify({ data }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.error("Could not add to cart:", error);
    }
  }

  if (myProds.length === 0) {
    return <div>No Products to show..!</div>;
  }

  return (
    <div className="book-card">
      <div className="card">
        {myProds.map((prod) => (
          <li key={prod._id}>
            <img src={prod.url} loading="lazy" alt={prod.title} />
            <h1>{prod.title + " - $" + prod.price}</h1>
            <strong>written by </strong>
            <p>{prod.author}</p>
            <h3>{prod.desc}</h3>
            <button onClick={() => addToCart(prod._id)}>Add to Cart</button>
          </li>
        ))}
      </div>
    </div>
  );
}
