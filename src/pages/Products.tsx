import type { JSX } from "react";
import ProductsFilterBar from "../components/products/ProductsFilterBar";
import { useState, useEffect } from "react";
import CollectionGrid from "../components/products/ProductsGrid";
import Loader from "../components/ui/Loader";
import type { ProductType } from "../types/types";
import CollectionFilterSort from "../components/products/ProductsFilterSort";

function Collection(): JSX.Element {
  const [products, setProducts] = useState<ProductType[] | null>(null);
  const [category, setCategory] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const [showFilterModal, setShowFilterModal] = useState<boolean>(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);

      const URL = category
        ? `https://dummyjson.com/products/category/${category}`
        : `https://dummyjson.com/products`;

      try {
        const res = await fetch(URL);

        if (!res.ok) {
          throw new Error("We couldn’t load the collection.");
        }

        const data = await res.json();
        setProducts(data.products);
      } catch (error) {
        setError(error instanceof Error ? error.message : "Unknown error");
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, [category]);

  const handleModalShow = (): void => {
    setShowFilterModal(true);
  };

  const handleModalClose = (): void => {
    setShowFilterModal(false);
  };

  const handleCategorySelect = (category: string): void => {
    setCategory(category);
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
          {products && <CollectionGrid products={products} />}
          <CollectionFilterSort
            setCategory={handleCategorySelect}
            showFilterModal={showFilterModal}
            closeFilterModal={handleModalClose}
          />
        </>
      )}
    </section>
  );
}

export default Collection;
