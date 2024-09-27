import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import ProductsPage from "./components/Products-Page";
import MyProducts from "./components/MyProducts";
import AddProducts from "./components/AddProducts";
import Cart from "./components/Cart";

const user = "66f44dfed6b40e6958dfbd49";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header/>,
      children: [
        {
          path: "/",
          element: <h1>Home-Page</h1>,
        },
        {
          path: "product",
          element: <ProductsPage />,
          children: [
            {
              path: "get-products",
              element: <MyProducts uid={user} />,
            },
            {
              path: "add-product",
              element: <AddProducts />,
            },
          ],
        },
        {
          path: "cart",
          element: <Cart uid={user}/>,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}
