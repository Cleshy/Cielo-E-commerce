import { useState, useEffect, useCallback } from "react";
import type {
  ProductType,
  UseFetchProductsParams,
  UseFetchProductsResult,
} from "../types/types";

function useFetchProducts({
  sort,
  order,
  category,
  limit = 12,
  skip = 0,
}: UseFetchProductsParams): UseFetchProductsResult {
  const [products, setProducts] = useState<ProductType[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [trigger, setTrigger] = useState<number>(0);

  const fetchProducts = useCallback(
    async (signal?: AbortSignal) => {
      setIsLoading(true);
      setError(null);

      const params = new URLSearchParams({
        limit: limit.toString(),
        skip: skip.toString(),
        ...(sort && { sort }),
        ...(order && { order }),
      });

      const url = category
        ? `https://dummyjson.com/products/category/${category}?${params}`
        : `https://dummyjson.com/products?${params}`;

      try {
        const res = await fetch(url, { signal });
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        setProducts(data.products);
      } catch (err) {
        if ((err as Error).name !== "AbortError") {
          setError((err as Error).message);
        }
      } finally {
        setIsLoading(false);
      }
    },
    [sort, order, category, limit, skip]
  );

  useEffect(() => {
    const controller = new AbortController();
    fetchProducts(controller.signal);
    return () => controller.abort();
  }, [fetchProducts, trigger]);

  return {
    products,
    isLoading,
    error,
    refetch: () => setTrigger((prev) => prev + 1),
  };
}

export default useFetchProducts;
