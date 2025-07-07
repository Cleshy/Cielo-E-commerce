import type { JSX } from "react";
import { useCart } from "../../context/CartProvider";

type QuantityControlsProps = {
  itemId: number;
  quantity: number;
};

function QuantityControls({
  itemId,
  quantity,
}: QuantityControlsProps): JSX.Element {
  const { increaseQuantity, decreaseQuantity } = useCart();

  return (
    <div className="flex items-center gap-2 mt-6">
      <button
        aria-label="Decrease quantity"
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          decreaseQuantity(itemId);
        }}
        disabled={quantity === 1}
        className="px-3 py-0.5 bg-brand rounded text-white hover:bg-brand-dark transition-colors duration-200 ease-in-out cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-300"
      >
        -
      </button>
      <span className="w-5 text-center">{quantity}</span>
      <button
        aria-label="Increase quantity"
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          increaseQuantity(itemId);
        }}
        className="px-3 py-0.5 bg-brand rounded text-white hover:bg-brand-dark transition-colors duration-200 ease-in-out cursor-pointer"
      >
        +
      </button>
    </div>
  );
}

export default QuantityControls;
