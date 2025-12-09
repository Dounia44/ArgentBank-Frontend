import { Outlet, useLocation } from "react-router";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

export default function Layout() {
  const { pathname } = useLocation();

  const isHome = pathname === "/";

  return (
    <>
      <Header />

      <main className={isHome ? "" : "bg-dark"}>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
