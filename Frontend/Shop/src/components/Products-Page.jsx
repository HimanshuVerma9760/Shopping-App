import { Link, Outlet } from "react-router-dom";
import "./css/ProductPage.css";

export default function ProductsPage() {
  return (
    <>
      <div className="head">
        <h1>The Shopping Wall</h1>
      </div>
      {/* <ul>
        <li>
          <Link to="add-product">Add-Product</Link>
        </li>
      </ul> */}
      <Outlet />
    </>
  );
}
