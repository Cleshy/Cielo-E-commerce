import type { JSX } from "react";
import ProductsFilterBar from "../components/products/ProductsFilterBar";
import { useState } from "react";
import ProductsGrid from "../components/products/ProductsGrid";
import Loader from "../components/ui/Loader";
import ProductsFilterSort from "../components/products/ProductsFilterSort";

import useFetchProducts from "../hooks/useFetchProducts";

function Products(): JSX.Element {
  const { products, isLoading, error, setSort, setOrder, refetch } =
    useFetchProducts({});

  const [showFilterModal, setShowFilterModal] = useState<boolean>(false);

  const handleModalShow = (): void => {
    setShowFilterModal(true);
  };

  const handleModalClose = (): void => {
    setShowFilterModal(false);
  };

  return (
    <section className="py-8">
      {isLoading ? (
        <Loader />
      ) : error ? (
        <p className="font-semibold text-red-600">{error}</p>
      ) : (
        <>
          <ProductsFilterBar onClick={handleModalShow} />
          {products && <ProductsGrid products={products} />}
          {/* <ProductsFilterSort
            setCategory={handleCategorySelect}
            showFilterModal={showFilterModal}
            closeFilterModal={handleModalClose}
          /> */}
        </>
      )}
    </section>
  );
}

export default Products;
