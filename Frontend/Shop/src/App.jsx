import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import ProductsPage from "./components/Products-Page";
import MyProducts from "./components/MyProducts";
import AddProducts from "./components/AddProducts";

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
          children: [
            {
              path: "get-products",
              element: <MyProducts />,
            },
            {
              path: "add-product",
              element: <AddProducts />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}
