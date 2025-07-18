import { useState, type JSX } from "react";
import { useCart } from "../context/CartProvider";
import EmptyCart from "../components/Cart/EmptyCart";
import CartHeading from "../components/Cart/CartHeading";
import CartItemList from "../components/Cart/CartItemList";
import CartSummary from "../components/Cart/CartSummary";
import CheckoutModal from "../components/Cart/CheckoutModal";
import Section from "../components/ui/Section";

function Cart(): JSX.Element {
  const { cart, isCartEmpty, cartItemCount, total } = useCart();
  const [showCartModal, setShowCartModal] = useState<boolean>(false);

  const closeModal = (): void => {
    setShowCartModal(false);
  };

  return (
    <Section aria-labelledby="cart-heading" className="max-w-5xl">
      {isCartEmpty ? (
        <EmptyCart />
      ) : (
        <>
          <CartHeading />
          <div className="grid grid-cols-1 items-start lg:grid-cols-[2fr_1fr] gap-8">
            <CartItemList items={cart} />
            <CartSummary
              total={total}
              totalItemCount={cartItemCount}
              showCartModal={setShowCartModal}
            />
          </div>
          <CheckoutModal closeModal={closeModal} showModal={showCartModal} />
        </>
      )}
    </Section>
  );
}

export default Cart;
