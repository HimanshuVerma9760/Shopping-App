import { Link, Outlet } from "react-router-dom";
import "./css/Header.css";

export default function Header() {
  return (
    <>
      <div className="header">
        <ul>
          <li>
            <Link to="/" className="links">
              Home
            </Link>
          </li>
          <li>
            <Link to="/product/get-products" className="links">
              Products page
            </Link>
          </li>
          <li>
            <Link to="/cart" className="links">
              My Cart
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
}
