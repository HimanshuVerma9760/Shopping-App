import { useEffect, useState } from "react";
import "./css/MyProductsCard.css";

export default function MyProducts({ uid }) {
  const [myProds, setMyProds] = useState([]);

  useEffect(() => {
    function getProducts() {
      fetch("http://localhost:3000/product/get-products")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          setMyProds(data);
        })
        .catch((err) => console.log(err));
    }
    getProducts();
    return () => {};
  }, []);

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
      console.log("could not add to cart....!!! " + error);
    }
  }

  return (
    <>
      <div className="book-card">
        <div className="card">
          {myProds.length !== 0
            ? myProds.map((prod) => (
                <li key={prod._id}>
                  <img src={prod.url} />
                  <h1>{prod.title + " - $" + prod.price}</h1>
                  <strong>writtern by </strong>
                  <p>{prod.author}</p>
                  <h3>{prod.desc}</h3>
                  <button onClick={() => addToCart(prod._id)}>
                    Add to Cart
                  </button>
                </li>
              ))
            : "No Products to show..!!"}
        </div>
      </div>
    </>
  );
}
