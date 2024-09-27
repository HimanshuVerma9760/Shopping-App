import { useEffect, useState } from "react";

export default function MyProducts({ uid }) {
  const [myProds, setMyProds] = useState([]);
  function getProducts() {
    fetch("http://localhost:3000/product/get-products")
      .then((response) => response.json())
      .then((data) => setMyProds(data))
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    getProducts();
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
        <div>
          {myProds.length !== 0
            ? myProds.map((prod) => (
                <li key={prod._id}>
                  <img src={prod.url} />
                  <h3>{prod.title + " $" + prod.price}</h3>
                  <strong>writtern by </strong>
                  <p>{prod.author}</p>
                  <p>{prod.desc}</p>
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
