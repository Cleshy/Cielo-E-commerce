import { Outlet } from "react-router";
import Navbar from "./navbar/Navbar";

function Layout() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 md:px-10 lg:px-20">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
