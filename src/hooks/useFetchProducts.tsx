import { useState, useEffect } from "react";
import type { ProductType } from "../types/types";

type UseFetchProductsParams = {
  sort?: string | null;
  order?: "asc" | "desc";
  limit?: number;
  skip?: number;
  productCategory?: string | null;
};

type UseFetchProductsResult = {
  products: ProductType[] | null;
  isLoading: boolean;
  error: string | null;
  sort: string;
  setSort: (value: string) => void;
  setOrder: (value: "asc" | "desc") => void;
  category: string | null;
  setCategory: (value: string | null) => void;
  refetch: () => void;
};

function useFetchProducts({
  sort = null,
  order = "asc",
  limit = 12,
  skip = 0,
  productCategory = null,
}: UseFetchProductsParams): UseFetchProductsResult {
  const [products, setProducts] = useState<ProductType[] | null>(null);
  const [category, setCategory] = useState<string | null>(productCategory);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [sortBy, setSortBy] = useState<string | null>(sort);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">(order);

  const [trigger, setTrigger] = useState<number>(0);

  const fetchProducts = async () => {
    setIsLoading(true);
    setError(null);

    const URL = category
      ? `https://dummyjson.com/products/category/${category}?limit=${limit}&skip=${skip}&sortBy=${sortBy}&order=${sortOrder}`
      : `https://dummyjson.com/products?limit=${limit}&skip=${skip}&sortBy=${sortBy}&order=${sortOrder}`;

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
  }, [sortBy, sortOrder, category, limit, skip, trigger]);

  return {
    products,
    isLoading,
    error,
    sort,
    setSort: setSortBy,
    setOrder: setSortOrder,
    category,
    setCategory,
    refetch: () => setTrigger((prev) => prev + 1),
  };
}

export default useFetchProducts;
