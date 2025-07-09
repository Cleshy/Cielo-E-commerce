import { Outlet } from "react-router";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />
      <main className="max-w-7xl mx-auto flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
