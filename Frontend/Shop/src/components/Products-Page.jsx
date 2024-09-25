import { Link, Outlet } from "react-router-dom";

export default function ProductsPage() {
  return (
    <>
      <h1>Welcome Product Page</h1>
      <ul>
        <li>
          <Link to="get-products">Get-Product</Link>
        </li>
        <li>
          <Link to="add-product">Add-Product</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}
