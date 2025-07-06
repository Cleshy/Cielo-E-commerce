import { useState, useEffect } from "react";
import type { ProductType } from "../types/types";
import useLocalStorage from "./useLocalStorage";
import { useNavigate } from "react-router";

function useWishList() {
  const navigate = useNavigate();
  const { setItem, getItem, removeItem } =
    useLocalStorage<ProductType[]>("my-cielo-wishlist");

  const [wishlist, setWishlist] = useState<ProductType[] | []>([]);

  useEffect(() => {
    const stored = getItem();
    if (!stored) {
      setItem([]);
      setWishlist([]);
    } else {
      setWishlist(stored);
    }
  }, []);

  const isWishlisted = (currentProduct: ProductType): boolean => {
    return wishlist.some(
      (wishlistedProduct) => wishlistedProduct.id === currentProduct.id
    );
  };

  const saveProduct = (item: ProductType): void => {
    const exists = wishlist.some((p) => p.id === item.id);
    if (!exists) {
      const update = [...wishlist, item];
      setWishlist(update);
      setItem(update);
    }
  };

  const removeProduct = (id: number): void => {
    const updated = wishlist.filter((p) => p.id !== id);
    setWishlist(updated);
    setItem(updated);
    navigate("/wishlist");
  };

  const clearWishList = (): void => {
    setWishlist([]);
    removeItem();
  };

  return { wishlist, isWishlisted, saveProduct, removeProduct, clearWishList };
}

export default useWishList;
