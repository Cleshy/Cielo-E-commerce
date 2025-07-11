import { lazy } from "react";

import Home from "../pages/Home";
const About = lazy(() => import("../pages/About"));
const Contact = lazy(() => import("../pages/Contact"));
const Products = lazy(() => import("../pages/Products"));
const Login = lazy(() => import("../pages/Login"));
const Wishlist = lazy(() => import("../pages/Wishlist"));
const Cart = lazy(() => import("../pages/Cart"));
const NotFound = lazy(() => import("../pages/NotFound"));
const Product = lazy(() => import("../pages/Product"));

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
