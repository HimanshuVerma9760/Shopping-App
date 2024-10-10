import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import ProductsPage from "./components/Products-Page";
import MyProducts from "./components/MyProducts";
import AddProducts from "./components/AddProducts";
import Cart from "./components/Cart";
import { cartLoader, productLoader } from "./components/LoaderComponent";
import SaveForLater from "./components/SaveLater";

const user = "66f44dfed6b40e6958dfbd49";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
      children: [
        {
          path: "/",
          element: <h1>Home-Page</h1>,
        },
        {
          path: "product",
          element: <ProductsPage />,
          //These children with seprate get and add products route are only for testing purposes......
          children: [
            {
              path: "get-products",
              loader: productLoader,
              element: <MyProducts uid={user} />,
            },
            {
              path: "add-product",
              element: <AddProducts />,
            },
          ],
        },
        {
          path: "cart/my-cart",
          loader: cartLoader,
          element: <Cart uid={user} />,
        },
        {
          path: "cart/my-cart/save-for-later/:uid",
          loader: cartLoader,
          element: <SaveForLater />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}
