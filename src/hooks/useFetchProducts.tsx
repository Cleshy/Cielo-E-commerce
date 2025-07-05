import { useState, useEffect } from "react";
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

  const fetchProducts = async () => {
    setIsLoading(true);
    setError(null);

    const URL = category
      ? `https://dummyjson.com/products/category/${category}?limit=${limit}&skip=${skip}&sortBy=${sort}&order=${order}`
      : `https://dummyjson.com/products?limit=${limit}&skip=${skip}&sortBy=${sort}&order=${order}`;

    try {
      const res = await fetch(URL);

      if (!res.ok) {
        throw new Error("Failed to fetch products");
      }

      const data = await res.json();
      setProducts(data.products);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [sort, order, category, limit, skip, trigger]);

  return {
    products,
    isLoading,
    error,
    refetch: () => setTrigger((prev) => prev + 1),
  };
}

export default useFetchProducts;
