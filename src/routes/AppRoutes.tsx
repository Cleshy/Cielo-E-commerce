import type { JSX } from "react";

import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";

import ProductsProvider from "../context/ProductsProvider";
import WishlistProvider from "../context/WishlistProvider";
import CartProvider from "../context/CartProvider";

import { routes } from "./routes";

function AppRoutes(): JSX.Element {
  return (
    <CartProvider>
      <WishlistProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={
                  route.requireProducts ? (
                    <ProductsProvider>{route.element}</ProductsProvider>
                  ) : (
                    route.element
                  )
                }
              />
            ))}
          </Route>
        </Routes>
      </WishlistProvider>
    </CartProvider>
  );
}

export default AppRoutes;
