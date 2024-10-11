import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import React, { lazy } from "react";
import { Suspense } from "react";
import { cartLoader, productLoader } from "./components/LoaderComponent";

const ProductsPage = lazy(() => import("./components/Products-Page"));
const MyProducts = lazy(() => import("./components/MyProducts"));
const AddProducts = lazy(() => import("./components/AddProducts"));
const Cart = lazy(() => import("./components/Cart"));
const SaveForLater = lazy(() => import("./components/SaveLater"));

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
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <ProductsPage />
            </Suspense>
          ),
          children: [
            {
              path: "get-products",
              loader: productLoader,
              element: (
                <Suspense fallback={<div>Loading...</div>}>
                  <MyProducts uid={user} />
                </Suspense>
              ),
            },
            {
              path: "add-product",
              element: (
                <Suspense fallback={<div>Loading...</div>}>
                  <AddProducts />
                </Suspense>
              ),
            },
          ],
        },
        {
          path: "cart/my-cart",
          loader: cartLoader,
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Cart uid={user} />
            </Suspense>
          ),
        },
        {
          path: "cart/my-cart/save-for-later/:uid",
          loader: cartLoader,
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <SaveForLater />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}
