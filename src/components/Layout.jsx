import {Outlet, useLocation} from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer";
import {Suspense} from "react";
import {Loading} from "./Loading.jsx";

function Layout() {
  const location = useLocation()
  return (
    <>
      <Header/>
      <main>
        <Suspense key={location.pathname} fallback={<Loading/>}>
          <Outlet/>
        </Suspense>
      </main>
      <Footer/>
    </>
  );
}

export default Layout;
