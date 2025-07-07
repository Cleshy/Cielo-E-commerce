import { useEffect, useState, useCallback } from "react";
import type { ProductType } from "../types/types";

function useFetchRelatedProducts(category: string) {
  const [products, setProducts] = useState<ProductType[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchRelatedProducts = useCallback(async (signal?: AbortSignal) => {
    setIsLoading(true);
    try {
      const res = await fetch(
        `https://dummyjson.com/products/category/${category}?limit=10`,
        { signal }
      );

      if (!res.ok) {
        console.error("Something went wrong");
      }

      const data = await res.json();
      setProducts(data.products);
    } catch (err) {
      console.error((err as Error).message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    fetchRelatedProducts(controller.signal);
    return () => controller.abort();
  }, [category]);

  return { products, isLoading };
}

export default useFetchRelatedProducts;
