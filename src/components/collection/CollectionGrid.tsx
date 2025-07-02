import type { JSX } from "react";
import type { Product } from "../../types/types";
import CollectionCard from "./CollectionCard";

function CollectionGrid({ products }: { products: Product[] }): JSX.Element {
  return (
    <div className="grid grid-cols-1 gap-4 py-6 md:grid-cols-2 xl:grid-cols-3 md:gap-x-6 md:gap-y-12">
      {products.map((product) => (
        <CollectionCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default CollectionGrid;
