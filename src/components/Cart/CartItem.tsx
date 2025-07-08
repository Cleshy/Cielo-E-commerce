import type { JSX } from "react";
import type { CartItemType } from "../../types/types";
import LazyLoadImg from "../ui/LazyLoadImg";
import { useCart } from "../../context/CartProvider";
import { Link } from "react-router-dom";
import QuantityControls from "./QuantityControls";
import { formatPrice } from "../../utils/formatPrice";

function CartItem({
  id,
  title,
  thumbnail,
  price,
  quantity,
  stock,
}: CartItemType): JSX.Element {
  const { removeFromCart } = useCart();

  return (
    <Link
      to={`/products/${id}`}
      className="cursor-pointer flex gap-5 p-3 bg-white rounded-lg shadow"
    >
      <LazyLoadImg
        src={thumbnail}
        alt={`An image of ${title}`}
        className="object-contain aspect-square w-20 h-20"
      />
      <div className="flex flex-col flex-1">
        <h3 className="text-sm font-semibold line-clamp-1">{title}</h3>
        <div className="flex justify-between items-center mt-2">
          <p>{formatPrice(price)}</p>
          <p className="text-xs opacity-50">Stock: {stock}</p>
        </div>
        <div className="flex items-center justify-between mt-auto">
          <button
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              removeFromCart(id);
            }}
            className="text-sm text-brand hover:underline focus:outline-none focus:ring-1 focus:ring-brand mt-auto"
          >
            Remove
          </button>

          <QuantityControls itemId={id} quantity={quantity} />
        </div>
      </div>
    </Link>
  );
}

export default CartItem;
