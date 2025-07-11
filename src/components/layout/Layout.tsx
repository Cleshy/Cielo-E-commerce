import { Outlet } from "react-router";
import Navbar from "./navbar/Navbar";
import Footer from "./Footer/Footer";
import { Suspense } from "react";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />
      <main className="flex-grow">
        <Suspense fallback={<h1>Loading...</h1>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
