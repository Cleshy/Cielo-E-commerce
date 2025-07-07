import type { JSX } from "react";

import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";

import ProductsProvider from "../context/ProductsProvider";
import WishlistProvider from "../context/WishlistProvider";
import CartProvider from "../context/CartProvider";

import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Products from "../pages/Products";
import Categories from "../pages/Categories";
import Login from "../pages/Login";
import Wishlist from "../pages/Wishlist";
import Cart from "../pages/Cart";
import NotFound from "../pages/NotFound";
import Product from "../pages/Product";

function AppRoutes(): JSX.Element {
  return (
    <CartProvider>
      <WishlistProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="categories" element={<Categories />} />
            <Route path="contact" element={<Contact />} />
            <Route
              path="products"
              element={
                <ProductsProvider>
                  <Products />
                </ProductsProvider>
              }
            />
            <Route path="products/:id" element={<Product />} />
            <Route path="login" element={<Login />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </WishlistProvider>
    </CartProvider>
  );
}

export default AppRoutes;
