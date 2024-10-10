import { useLoaderData } from "react-router-dom";
import "./css/MyProductsCard.css";

export default function SaveForLater() {
  const { laterItems } = useLoaderData();

  const style = {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    flexWrap: "wrap",
  };
  return (
    <>
      <div className="save-later-section">
        <h2 style={style}>Saved For Later</h2>
        <div className="card">
          {Array.isArray(laterItems)
            ? laterItems.map((item) => (
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
