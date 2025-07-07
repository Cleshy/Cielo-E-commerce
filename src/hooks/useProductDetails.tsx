import type { ProductType } from "../types/types";
import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router";

function useFetchProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchProduct = useCallback(
    async (signal?: AbortSignal) => {
      if (!id) return;
      setError(null);
      setIsLoading(true);
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`, {
          signal,
        });

        if (!res.ok) throw new Error("Failed to fetch product");

        const data = await res.json();
        setProduct(data);
      } catch (err) {
        if ((err as Error).name !== "AbortError") {
          setError((err as Error).message);
        }
      } finally {
        setIsLoading(false);
      }
    },
    [id]
  );

  useEffect(() => {
    const controller = new AbortController();
    fetchProduct(controller.signal);
    return () => controller.abort();
  }, [id]);

  return { product, isLoading, error };
}

export default useFetchProduct;
