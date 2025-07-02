import type { JSX } from "react";
import FilterBar from "../components/collection/FilterBar";
import { useState, useEffect } from "react";
import CollectionGrid from "../components/collection/CollectionGrid";
import Loader from "../components/ui/Loader";
import type { Product } from "../types/types";

function Collection(): JSX.Element {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const res = await fetch("https://dummyjson.com/products");

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
  }, []);

  return (
    <section className="py-8">
      {isLoading ? (
        <Loader />
      ) : error ? (
        <p className="font-semibold text-red-600">{error}</p>
      ) : (
        <>
          <FilterBar />
          {products && <CollectionGrid products={products} />}
        </>
      )}
    </section>
  );
}

export default Collection;
