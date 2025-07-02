import type { JSX } from "react";
import type { ProductType } from "../../types/types";
import { FaRegHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import Icon from "../ui/Icon";
import Button from "../ui/Button";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function ProductsCard({ product }: { product: ProductType }): JSX.Element {
  return (
    <Link to={`/products/${product.id}`}>
      <div className="relative flex flex-row h-full gap-6 p-4 border-b group border-brand/20 md:border-none md:shadow md:rounded-lg">
        <LazyLoadImage
          className="flex-1 object-contain transition-transform duration-200 ease-in-out group-hover:scale-110 w-30"
          src={product.thumbnail}
          alt={`Thumbnail of product: ${product.title}`}
        />
        <div className="flex flex-col gap-2 flex-2">
          <h3 className="w-40 font-semibold truncate">{product.title}</h3>
          <p className="text-sm text-justify line-clamp-3 xl:line-clamp-4">
            {product.description}
          </p>
          <p className="self-end my-3 text-2xl font-bold">${product.price}</p>
          <div className="flex self-end gap-4 mt-auto">
            <Button className="p-2 text-white transition-all duration-200 ease-in-out rounded-full bg-brand hover:bg-brand-dark">
              <Icon icon={FaRegHeart} />
            </Button>
            <Button className="p-2 text-white transition-all duration-200 ease-in-out rounded-full bg-brand hover:bg-brand-dark">
              <Icon icon={FaShoppingCart} />
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductsCard;
