import type { JSX } from "react";
import type { ProductType } from "../../types/types";
import { FaRegHeart, FaShoppingCart } from "react-icons/fa";
import Icon from "../ui/Icon";
import Button from "../ui/Button";

type RelatedProductCardProps = {
  product: ProductType;
};

function RelatedProductCard({ product }: RelatedProductCardProps): JSX.Element {
  return (
    <div className="flex flex-col h-full group">
      <img
        className="group-hover:scale-110 transition-transform duration-300 ease-in-out w-[60%] mx-auto mb-10"
        src={product.thumbnail}
        alt={`Product image of ${product.title}`}
      />
      <div className="flex flex-col gap-2 mb-4">
        <h3 className="text-lg font-bold truncate">{product.title}</h3>
        <p className="text-sm text-justify line-clamp-2">
          {product.description}
        </p>
      </div>
      <p className="mt-auto text-xl font-semibold">${product.price}</p>
      <div className="flex self-end gap-4 mt-6">
        <Button className="p-2 text-white transition-all duration-200 ease-in-out rounded-full bg-brand hover:bg-brand-dark">
          <Icon icon={FaRegHeart} />
        </Button>
        <Button className="p-2 text-white transition-all duration-200 ease-in-out rounded-full bg-brand hover:bg-brand-dark">
          <Icon icon={FaShoppingCart} />
        </Button>
      </div>
    </div>
  );
}

export default RelatedProductCard;
