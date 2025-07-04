import type { JSX } from "react";
import ProductsToolbar from "../components/products/ProductsToolbar";
import ProductsGrid from "../components/products/ProductsGrid";
import Loader from "../components/ui/Loader";

import useFetchProducts from "../hooks/useFetchProducts";

function Products(): JSX.Element {
  const {
    products,
    isLoading,
    error,
    sort,
    setSort,
    setOrder,
    category,
    setCategory,
  } = useFetchProducts({});

  return (
    <section className="py-8">
      {isLoading ? (
        <Loader />
      ) : error ? (
        <p className="font-semibold text-red-600">{error}</p>
      ) : (
        <>
          <ProductsToolbar
            category={category}
            setCategory={setCategory}
            sort={sort}
            setSortBy={setSort}
            setOrderBy={setOrder}
          />
          {products && <ProductsGrid products={products} />}
        </>
      )}
    </section>
  );
}

export default Products;
