import { createContext, useContext, useEffect, type ReactNode } from "react";
import { useReducer } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import type { CartItemType, ProductType } from "../types/types";
import type { CartAction } from "../types/types";

export type CartProviderProps = {
  children: ReactNode;
};

const CartContext = createContext<{
  cart: CartItemType[];
  addToCart: (product: ProductType) => void;
  removeFromCart: (productId: number) => void;
  increaseQuantity: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
  clearCart: () => void;
  isCartEmpty: boolean;
  cartItemCount: number;
  total: number;
  isAddedToCart: (currentProduct: ProductType) => boolean;
} | null>(null);

const cartReducer = (state: CartItemType[] | [], action: CartAction) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingItem = state.find((item) => item.id === action.payload.id);

      if (existingItem) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...state, { ...action.payload, quantity: 1 }];
      }
    }
    case "INCREASE_QUANTITY":
      return state.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    case "DECREASE_QUANTITY":
      return state.map((product) => {
        if (product.id === action.payload) {
          if (product.quantity > 1) {
            return { ...product, quantity: product.quantity - 1 };
          }
        }
        return product;
      });
    case "REMOVE_FROM_CART": {
      return state.filter((item) => item.id !== action.payload);
    }
    case "CLEAR_CART": {
      return [];
    }
    default: {
      return state;
    }
  }
};

function CartProvider({ children }: CartProviderProps) {
  const { getItem, setItem } = useLocalStorage<CartItemType[]>("cart");
  const initalCart = getItem() ?? [];
  const [cart, dispatch] = useReducer(cartReducer, initalCart);

  useEffect(() => {
    setItem(cart);
  }, [cart, setItem]);

  const addToCart = (product: ProductType) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  const removeFromCart = (productId: number) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: productId });
  };

  const increaseQuantity = (productId: number) => {
    dispatch({ type: "INCREASE_QUANTITY", payload: productId });
  };

  const decreaseQuantity = (productId: number) => {
    dispatch({ type: "DECREASE_QUANTITY", payload: productId });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const isAddedToCart = (currentProduct: ProductType): boolean => {
    return cart.some((cartProduct) => cartProduct.id === currentProduct.id);
  };

  const isCartEmpty = cart.length === 0;

  const cartItemCount = cart.length;

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

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
