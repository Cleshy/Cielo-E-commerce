import type { JSX } from "react";
import type { ProductType } from "../../types/types";
import ProductsCard from "./ProductsCard";

function ProductsGrid({ products }: { products: ProductType[] }): JSX.Element {
  return (
    <div className="grid grid-cols-1 gap-4 py-6 md:grid-cols-2 xl:grid-cols-3 md:gap-x-6 md:gap-y-12">
      {products.map((product) => (
        <ProductsCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductsGrid;
