import { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Loading } from "./Loading";

export function Layout() {
  const location = useLocation();
  return (
    <>
      <Header />
      <main>
        <Suspense key={location.pathname} fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
