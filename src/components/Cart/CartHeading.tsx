import { useState, type JSX } from "react";
import ClearCartModal from "./ClearCartModal";

function CartHeading(): JSX.Element {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <div className="flex justify-between">
      <h1 id="cart-heading" className="text-2xl font-bold">
        Your Selection
      </h1>
      <button
        type="button"
        className="pt-1 cursor-pointer text-brand"
        onClick={() => setShowModal(true)}
      >
        Clear Cart
      </button>
      <ClearCartModal
        showModal={showModal}
        closeModal={() => setShowModal(false)}
      />
    </div>
  );
}

export default CartHeading;
