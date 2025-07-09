import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Products from "../pages/Products";
import Login from "../pages/Login";
import Wishlist from "../pages/Wishlist";
import Cart from "../pages/Cart";
import NotFound from "../pages/NotFound";
import Product from "../pages/Product";

import type { JSX } from "react";

interface AppRoute {
  path: string;
  element: JSX.Element;
  requireProducts: boolean;
}

export const routes: AppRoute[] = [
  {
    path: "/",
    element: <Home />,
    requireProducts: false,
  },
  {
    path: "/about",
    element: <About />,
    requireProducts: false,
  },
  {
    path: "/contact",
    element: <Contact />,
    requireProducts: false,
  },
  {
    path: "/products",
    element: <Products />,
    requireProducts: true,
  },
  {
    path: "/products/:id",
    element: <Product />,
    requireProducts: false,
  },
  {
    path: "/login",
    element: <Login />,
    requireProducts: false,
  },
  {
    path: "/wishlist",
    element: <Wishlist />,
    requireProducts: false,
  },
  {
    path: "/cart",
    element: <Cart />,
    requireProducts: false,
  },
  {
    path: "*",
    element: <NotFound />,
    requireProducts: false,
  },
];
