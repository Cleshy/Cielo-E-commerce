import useWishlist from "../hooks/useWishList";
import { createContext, type ReactNode } from "react";
import type { ProductType } from "../types/types";
import { useContext } from "react";

type WishlistContextType = {
  wishlist: ProductType[];
  isWishlisted: (value: ProductType) => boolean;
  addToWishlist: (item: ProductType) => void;
  removeFromWishlist: (id: number) => void;
  clearWishlist: () => void;
};

type WishlistProviderProps = {
  children: ReactNode;
};

const WishlistContext = createContext<WishlistContextType | null>(null);

function WishlistProvider({ children }: WishlistProviderProps) {
  const {
    wishlist,
    isWishlisted,
    addToWishlist,
    removeFromWishlist,
    clearWishlist,
  } = useWishlist();

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        isWishlisted,
        addToWishlist,
        removeFromWishlist,
        clearWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlistContext() {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error(
      "useWishlistContext must be used within a WishlistProvider"
    );
  }
  return context;
}

export default WishlistProvider;
