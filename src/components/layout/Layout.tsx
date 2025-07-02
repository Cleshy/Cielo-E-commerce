import { Outlet } from "react-router";
import Navbar from "./navbar/Navbar";

function Layout() {
  return (
    <>
      <Navbar />
      <main className="container px-4 mx-auto lg:px-20">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
