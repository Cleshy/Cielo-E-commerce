import type { JSX } from "react";
import { formatPrice } from "../../utils/formatPrice";

type CartSummaryProps = {
  total: number;
  totalItemCount: number;
  showCartModal: (value: boolean) => void;
};

function CartSummary({
  total,
  totalItemCount,
  showCartModal,
}: CartSummaryProps): JSX.Element {
  return (
    <section
      aria-label="Order summary"
      className="p-5 bg-brand/10 rounded-lg md:mt-6"
    >
      <h2 className="text-lg font-bold mb-4">Order Summary</h2>
      <div className="flex flex-col items-end">
        <p className="mb-2">
          <strong>Total items:</strong> {totalItemCount}
        </p>
        <p className="mb-4">
          <strong>Total:</strong> {formatPrice(total)}
        </p>
      </div>
      <button
        onClick={() => showCartModal(true)}
        aria-label="Checkout"
        className="cursor-pointer w-full bg-brand text-white py-2 rounded hover:bg-brand-dark transition"
      >
        Checkout
      </button>
    </section>
  );
}

export default CartSummary;
