import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  type ReactNode,
  useMemo,
} from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import type { CartItemType, ProductType } from "../types/types";

export type CartProviderProps = {
  children: ReactNode;
};

const CartContext = createContext<{
  cart: CartItemType[];
  addToCart: (item: ProductType) => void;
  removeFromCart: (itemId: number) => void;
  increaseQuantity: (itemId: number) => void;
  decreaseQuantity: (itemId: number) => void;
  clearCart: () => void;
  isCartEmpty: boolean;
  cartItemCount: number;
  total: number;
  isAddedToCart: (currentProduct: ProductType) => boolean;
} | null>(null);

function CartProvider({ children }: CartProviderProps) {
  const { getItem, setItem } = useLocalStorage<CartItemType[]>("cart");
  const initialCart = getItem() ?? [];
  const [cart, setCart] = useState<CartItemType[]>(initialCart);

  useEffect(() => {
    setItem(cart);
  }, [cart, setItem]);

  const addToCart = useCallback((item: ProductType): void => {
    setCart((prevCart) => {
      const found = prevCart.find((cartItem) => cartItem.id === item.id);
      if (found) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((itemId: number): void => {
    setCart((prevCart) => {
      return prevCart.filter((cartItem) => cartItem.id !== itemId);
    });
  }, []);

  const increaseQuantity = useCallback((itemId: number): void => {
    setCart((prevCart) =>
      prevCart.map((cartItem) => {
        if (cartItem.id === itemId && cartItem.quantity < cartItem.stock) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        } else {
          return cartItem;
        }
      })
    );
  }, []);

  const decreaseQuantity = useCallback((itemId: number): void => {
    setCart((prevCart) =>
      prevCart
        .map((cartItem) =>
          cartItem.id === itemId
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
        .filter((cartItem) => cartItem.quantity > 0)
    );
  }, []);

  const clearCart = useCallback((): void => {
    setCart([]);
  }, []);

  const isAddedToCart = (currentProduct: ProductType): boolean => {
    return cart.some((cartProduct) => cartProduct.id === currentProduct.id);
  };
  const isCartEmpty = useMemo(() => cart.length === 0, [cart]);
  const cartItemCount = useMemo(() => cart.length, [cart]);
  const total = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        isCartEmpty,
        cartItemCount,
        total,
        isAddedToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider.");
  return context;
};
