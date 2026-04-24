import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { lazy } from "react";
import Layout from "@/components/Layout";
import NotFound from "@/pages/NotFound";
import Thanks from "@/pages/Thanks";

// Lazyload
const Home = lazy(() => import("@/pages/Home"));
const About = lazy(() => import("@/pages/About"));
const Cart = lazy(() => import("@/pages/Cart"));
const Category = lazy(() => import("@/pages/Category"));
const ProductDetails = lazy(() => import("@/pages/ProductDetails"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "old-home", element: <Navigate to="/" replace /> }, // replace для редиректа
      { path: "about", element: <About /> },
      { path: "cart", element: <Cart /> },
      { path: "thanks", element: <Thanks /> }, // Thanks тоже можно лениво загрузить
      { path: "category/:categoryId", element: <Category /> },
      { path: "product/:productId", element: <ProductDetails /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
