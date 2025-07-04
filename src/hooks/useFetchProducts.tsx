import { useState, useEffect } from "react";
import type { ProductType } from "../types/types";

type UseFetchProductsParams = {
  sort?: string;
  order?: "asc" | "desc";
  limit?: number;
  skip?: number;
};

type UseFetchProductsResult = {
  products: ProductType[] | null;
  isLoading: boolean;
  error: string | null;
  setSort: (value: string) => void;
  setOrder: (value: "asc" | "desc") => void;
  refetch: () => void;
};

function useFetchProducts({
  sort = "price",
  order = "desc",
  limit = 12,
  skip = 0,
}: UseFetchProductsParams): UseFetchProductsResult {
  const [products, setProducts] = useState<ProductType[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [sortBy, setSortBy] = useState<string>(sort);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">(order);

  const [trigger, setTrigger] = useState<number>(0);

  const fetchProducts = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch(
        `https://dummyjson.com/products?limit=${limit}&skip=${skip}&sortBy=${sortBy}&order=${sortOrder}`
      );

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
  }, [sortBy, sortOrder, limit, skip, trigger]);

  return {
    products,
    isLoading,
    error,
    setSort: setSortBy,
    setOrder: setSortOrder,
    refetch: () => setTrigger((prev) => prev + 1),
  };
}

export default useFetchProducts;
