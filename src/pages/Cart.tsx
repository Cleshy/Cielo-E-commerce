import type { JSX } from "react";
import { useCart } from "../context/CartProvider";
import EmptyCart from "../components/Cart/EmptyCart";
import CartHeading from "../components/Cart/CartHeading";
import CartItemList from "../components/Cart/CartItemList";
import CartSummary from "../components/Cart/CartSummary";

function Cart(): JSX.Element {
  const { cart, isCartEmpty, cartItemCount, total } = useCart();

  return (
    <section className="mt-8" aria-labelledby="cart-heading">
      {isCartEmpty ? (
        <EmptyCart />
      ) : (
        <>
          <CartHeading />
          <div className="grid grid-cols-1 items-start md:grid-cols-[2fr_1fr] gap-8">
            <CartItemList items={cart} />
            <CartSummary total={total} totalItemCount={cartItemCount} />
          </div>
        </>
      )}
    </section>
  );
}

export default Cart;
