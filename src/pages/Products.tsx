import type { JSX } from "react";
import ProductsToolbar from "../components/Products/ProductsToolbar";
import ProductsGrid from "../components/Products/ProductsGrid";
import Loader from "../components/ui/Loader";
import { useProductsContext } from "../context/ProductsProvider";

function Products(): JSX.Element {
  const { products, isLoading, error } = useProductsContext();

  return (
    <section className="py-8">
      {isLoading ? (
        <Loader />
      ) : error ? (
        <p className="font-semibold text-red-600">{error}</p>
      ) : (
        <>
          <ProductsToolbar />
          {products && <ProductsGrid products={products} />}
        </>
      )}
    </section>
  );
}

export default Products;
