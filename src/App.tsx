import { lazy } from "react";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

import { Layout } from "@/components/Layout";
import { NotFound } from "@/pages/NotFound";
import { Thanks } from "@/pages/Thanks";

const Home = lazy(() =>
  import("@/pages/Home").then((module) => ({ default: module.Home }))
);

const About = lazy(() =>
  import("@/pages/About").then((module) => ({ default: module.About }))
);

const Cart = lazy(() =>
  import("@/pages/Cart").then((module) => ({ default: module.Cart }))
);

const Category = lazy(() =>
  import("@/pages/Category").then((module) => ({ default: module.Category }))
);

const ProductDetails = lazy(() =>
  import("@/pages/ProductDetails").then((module) => ({
    default: module.ProductDetails,
  }))
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "old-home", element: <Navigate to={"/"} replace /> },
      { path: "about", element: <About /> },
      { path: "cart", element: <Cart /> },
      { path: "thanks", element: <Thanks /> },
      { path: "category/:categoryId", element: <Category /> },
      { path: "product/:productId", element: <ProductDetails /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
