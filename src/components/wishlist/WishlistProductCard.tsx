import type { JSX } from "react";
import type { ProductType } from "../../types/types";
import { Link } from "react-router";
import ProductReviewStars from "../product/ProductReviewStars";
import Button from "../ui/Button";
import Icon from "../ui/Icon";
import { MdDeleteForever } from "react-icons/md";
import LazyLoadImg from "../ui/LazyLoadImg";
import { useWishlistContext } from "../../context/WishlistProvider";
import { FaHeartCircleCheck } from "react-icons/fa6";
import { useCart } from "../../context/CartProvider";
import { BsFillCartCheckFill, BsFillCartFill } from "react-icons/bs";

type WishlistProductCardProps = {
  product: ProductType;
};

function WishlistProductCard({
  product,
}: WishlistProductCardProps): JSX.Element {
  const { removeFromWishlist } = useWishlistContext();
  const { addToCart, isAddedToCart } = useCart();

  return (
    <Link to={`/products/${product.id}`}>
      <div className="relative p-3 text-center bg-white rounded-lg shadow group">
        <FaHeartCircleCheck className="absolute text-4xl transform rotate-25 text-brand/20 top-2 right-2" />
        <LazyLoadImg
          className="w-40"
          src={product.thumbnail}
          alt={`Image of ${product.title}`}
        />
        <div className="flex flex-col gap-2 text-left">
          <ProductReviewStars starClassName="w-3.5" rating={product.rating} />
          <div className="flex flex-col gap-0.5">
            <h3 className="text-lg font-semibold line-clamp-1">
              {product.title}
            </h3>
            <p className="text-sm text-justify line-clamp-2">
              {product.description}
            </p>
          </div>
          <p className="mt-2 text-xl font-semibold">${product.price}</p>
          <div className="flex self-end gap-2">
            <Button
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                removeFromWishlist(product.id);
              }}
              size="sm"
            >
              <Icon size="1.25rem" icon={MdDeleteForever} />
            </Button>
            <Button
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                addToCart(product);
              }}
            >
              <Icon
                size="1.25rem"
                icon={
                  isAddedToCart(product) ? BsFillCartCheckFill : BsFillCartFill
                }
              />
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default WishlistProductCard;
