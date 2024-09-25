import { useEffect, useState } from "react";

export default function MyProducts() {
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

  function addToCart(prodId) {
    
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
                  <button onClick={() => addToCart(prod._id)}></button>
                </li>
              ))
            : "No Products to show..!!"}
        </div>
      </div>
    </>
  );
}
