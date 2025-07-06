import type { JSX } from "react";
import type { ProductType } from "../../types/types";
import WishlistProductCard from "./WishlistProductCard";

type WishlistGirdProps = {
  wishlist: ProductType[] | null;
};

function WishlistGrid({ wishlist }: WishlistGirdProps): JSX.Element {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {wishlist?.map((product, index) => {
        return <WishlistProductCard key={index} product={product} />;
      })}
    </div>
  );
}

export default WishlistGrid;
