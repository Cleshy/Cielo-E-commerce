import type { JSX } from "react";
import type { ProductType } from "../../types/types";
import { FaRegHeart } from "react-icons/fa";
import { FaHeartCircleCheck } from "react-icons/fa6";
import Icon from "../ui/Icon";
import Button from "../ui/Button";
import ProductReviewStars from "../Product/ProductReviewStars";
import { useWishlistContext } from "../../context/WishlistProvider";
import { Link } from "react-router-dom";
import LazyLoadImg from "../ui/LazyLoadImg";
import { useCart } from "../../context/CartProvider";
import { BsFillCartCheckFill, BsFillCartFill } from "react-icons/bs";

type RelatedProductCardProps = {
  product: ProductType;
};

function RelatedProductCard({ product }: RelatedProductCardProps): JSX.Element {
  const { isWishlisted, addToWishlist } = useWishlistContext();
  const { addToCart, isAddedToCart } = useCart();

  return (
    <Link to={`/products/${product.id}`}>
      <div className="flex flex-col h-full group">
        <LazyLoadImg
          className="group-hover:scale-110 transition-transform duration-300 ease-in-out w-[60%] mx-auto mb-10"
          src={product.thumbnail}
          alt={`Product image of ${product.title}`}
        />
        <div className="flex flex-col gap-2 mb-4">
          <ProductReviewStars rating={product.rating} />
          <h3 className="text-lg font-bold truncate">{product.title}</h3>
          <p className="text-sm text-justify line-clamp-2">
            {product.description}
          </p>
        </div>
        <p className="mt-auto text-xl font-semibold">${product.price}</p>
        <div className="flex self-end gap-4 mt-6">
          <Button
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              addToWishlist(product);
            }}
            className="p-2 text-white transition-all duration-200 ease-in-out rounded-full bg-brand hover:bg-brand-dark"
          >
            <Icon
              icon={isWishlisted(product) ? FaHeartCircleCheck : FaRegHeart}
            />
          </Button>
          <Button
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              addToCart(product);
            }}
            className="p-2 text-white transition-all duration-200 ease-in-out rounded-full bg-brand hover:bg-brand-dark"
          >
            <Icon
              icon={
                isAddedToCart(product) ? BsFillCartCheckFill : BsFillCartFill
              }
            />
          </Button>
        </div>
      </div>
    </Link>
  );
}

export default RelatedProductCard;
