import { Link, Outlet } from "react-router-dom";

export default function Header() {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/product">products page</Link>
        </li>
        <li>
          <Link to="/cart">My Cart</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}