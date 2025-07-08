import { Outlet } from "react-router";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="container flex-grow px-4 mx-auto lg:px-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
