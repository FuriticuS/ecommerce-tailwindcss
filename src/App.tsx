import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import Thanks from "./pages/Thanks";
import {lazy, Suspense} from "react";

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
  return (
    <Suspense fallback={<div className="text-center p-10">Загрузка...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
