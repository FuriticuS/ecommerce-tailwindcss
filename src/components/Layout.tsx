import { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Loading } from "./Loading";
import Footer from "./Footer";
import Header from "./Header";

function Layout() {
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

export default Layout;
