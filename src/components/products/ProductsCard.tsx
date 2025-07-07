import { type JSX } from "react";
import type { ProductType } from "../../types/types";
import { FaRegHeart } from "react-icons/fa";
import Icon from "../ui/Icon";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";
import LazyLoadImg from "../ui/LazyLoadImg";
import ProductReviewStars from "../Product/ProductReviewStars";
import { useWishlistContext } from "../../context/WishlistProvider";
import { FaHeartCircleCheck } from "react-icons/fa6";
import { useCart } from "../../context/CartProvider";
import { BsFillCartCheckFill, BsFillCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function ProductsCard({ product }: { product: ProductType }): JSX.Element {
  const { isWishlisted, addToWishlist } = useWishlistContext();
  const { addToCart, isAddedToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    addToCart(product);
  };

  const handleAddToWishlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    addToWishlist(product);
  };

  return (
    <Link
      to={`/products/${product.id}`}
      onClick={() => navigate(`/products/${product.id}`)}
      className="relative flex flex-row h-full gap-4 p-4 border-b group border-brand/20 md:border-none md:shadow md:rounded-lg"
    >
      <LazyLoadImg
        className="flex-1 transition-transform duration-200 ease-in-out group-hover:scale-110 object-contain aspect-square w-32 h-32"
        src={product.thumbnail}
        alt={`Thumbnail of product: ${product.title}`}
      />
      <div className="flex flex-col gap-2 flex-2">
        <ProductReviewStars rating={product.rating} />
        <h3 className="w-40 font-semibold truncate">{product.title}</h3>
        <p className="text-sm text-justify line-clamp-3 xl:line-clamp-4">
          {product.description}
        </p>
        <p className="self-end my-3 text-2xl font-bold">${product.price}</p>
        <div className="flex self-end gap-4 mt-auto">
          <Button
            onClick={handleAddToWishlist}
            className="p-2 text-white transition-all duration-200 ease-in-out rounded-full bg-brand hover:bg-brand-dark"
          >
            <Icon
              icon={isWishlisted(product) ? FaHeartCircleCheck : FaRegHeart}
            />
          </Button>
          <Button
            onClick={handleAddToCart}
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

export default ProductsCard;
