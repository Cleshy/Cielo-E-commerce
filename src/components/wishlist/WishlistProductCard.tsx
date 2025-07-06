import type { JSX } from "react";
import type { ProductType } from "../../types/types";
import { Link } from "react-router";
import ProductReviewStars from "../product/ProductReviewStars";
import Button from "../ui/Button";
import Icon from "../ui/Icon";
import { FaShoppingCart } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useWishlistContext } from "../../context/WishlistProvider";
import { FaHeartCircleCheck } from "react-icons/fa6";

type WishlistProductCardProps = {
  product: ProductType;
};

function WishlistProductCard({
  product,
}: WishlistProductCardProps): JSX.Element {
  const { removeProduct } = useWishlistContext();

  return (
    <Link to={`/products/${product.id}`}>
      <div className="relative p-3 text-center bg-white rounded-lg shadow group">
        <FaHeartCircleCheck className="absolute transform rotate-25 text-brand/15 top-4 right-3 text-7xl" />
        <LazyLoadImage
          effect="blur"
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
                removeProduct(product.id);
              }}
              size="sm"
            >
              <Icon size="1.25rem" icon={MdDeleteForever} />
            </Button>
            <Button size="sm">
              <Icon size="1.25rem" icon={FaShoppingCart} />
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default WishlistProductCard;
