import { type JSX } from "react";
import type { ProductType } from "../../types/types";
import ProductImages from "./ProductImages";
import { FaRegHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import Icon from "../ui/Icon";
import Button from "../ui/Button";
import { IoMdArrowDropright } from "react-icons/io";
import ProductReviews from "./ProductReviews";
import ProductReviewStars from "./ProductReviewStars";
import { useWishlistContext } from "../../context/WishlistProvider";

type ProductCardProps = {
  product: ProductType;
};

function ProductCard({ product }: ProductCardProps): JSX.Element {
  const { saveProduct } = useWishlistContext();

  return (
    <div className="bg-white shadow rounded-lg p-4 flex flex-col gap-4 xl:max-w-[80%] xl:mx-auto">
      <div className="flex flex-col gap-6 pb-4 border-b lg:border-none lg:gap-12 md:flex-row border-brand/30">
        <ProductImages
          thumbnail={product.thumbnail}
          productTitle={product.title}
          images={product.images}
        />
        <div className="flex flex-col flex-1 gap-8">
          <div className="flex flex-col gap-2">
            <ProductReviewStars rating={product.rating} />
            <h2 className="text-xl font-bold">{product.title}</h2>
            <p className="text-justify">{product.description}</p>
            <p className="mt-2 text-3xl font-bold">${product.price}</p>
          </div>
          <div className="flex self-end gap-4 mt-auto">
            <Button
              className="p-2 text-white transition-all duration-200 ease-in-out rounded-full bg-brand hover:bg-brand-dark"
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                saveProduct(product);
              }}
            >
              <Icon icon={FaRegHeart} />
            </Button>
            <Button className="p-2 text-white transition-all duration-200 ease-in-out rounded-full bg-brand hover:bg-brand-dark">
              <Icon icon={FaShoppingCart} />
            </Button>
          </div>
        </div>
      </div>
      <div className="pb-4 border-b border-brand/30">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">Details</h3>
          <span className="text-xs text-gray-400">{product.sku}</span>
        </div>
        <ul className="flex flex-col gap-2 mt-4">
          <li className="flex items-center -ml-1">
            <Icon
              size="1.5rem"
              className="text-brand-light"
              icon={IoMdArrowDropright}
            />
            <span>Minimum order quantity: {product.minimumOrderQuantity}</span>
          </li>
          <li className="flex items-center -ml-1">
            <Icon
              size="1.5rem"
              className="text-brand-light"
              icon={IoMdArrowDropright}
            />
            <span>{product.shippingInformation}</span>
          </li>
          <li className="flex items-center -ml-1">
            <Icon
              size="1.5rem"
              className="text-brand-light"
              icon={IoMdArrowDropright}
            />
            <span>{product.returnPolicy}</span>
          </li>
          <li className="flex items-center -ml-1">
            <Icon
              size="1.5rem"
              className="text-brand-light"
              icon={IoMdArrowDropright}
            />
            <span>{product.warrantyInformation}</span>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-semibold">Reviews</h3>
        <ProductReviews reviews={product.reviews} />
      </div>
    </div>
  );
}

export default ProductCard;
