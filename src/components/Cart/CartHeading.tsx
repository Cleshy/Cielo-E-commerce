import type { JSX } from "react";
import { useCart } from "../../context/CartProvider";

function CartHeading(): JSX.Element {
  const { clearCart } = useCart();

  return (
    <div className="flex justify-between">
      <h1 id="cart-heading" className="text-2xl font-bold">
        Your Selection
      </h1>
      <button
        type="button"
        className="pt-1 cursor-pointer text-brand"
        onClick={() => {
          if (confirm("Are you sure you want to clear your cart?")) clearCart();
        }}
      >
        Clear Cart
      </button>
    </div>
  );
}

export default CartHeading;
