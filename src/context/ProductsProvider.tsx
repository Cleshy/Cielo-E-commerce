import useFetchProducts from "../hooks/useFetchProducts";
import { createContext, useContext, useState, type ReactNode } from "react";
import type { ProductType } from "../types/types";

type ProductsContextType = {
  products: ProductType[] | null;
  isLoading: boolean;
  error: string | null;
  sort: string | null;
  setSort: (value: string) => void;
  setOrder: (value: "asc" | "desc") => void;
  category: string | null;
  setCategory: (value: string | null) => void;
};

const ProductsContext = createContext<ProductsContextType | undefined>(
  undefined
);

function ProductsProvider({ children }: { children: ReactNode }) {
  const [sort, setSort] = useState<string | null>(null);
  const [order, setOrder] = useState<"asc" | "desc">("asc");
  const [category, setCategory] = useState<string | null>(null);
  const { products, isLoading, error } = useFetchProducts({
    sort: sort,
    order: order,
    category: category,
  });
  return (
    <ProductsContext.Provider
      value={{
        products,
        isLoading,
        error,
        sort,
        setSort,
        setOrder,
        category,
        setCategory,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export const useProductsContext = () => {
  const context = useContext(ProductsContext);
  if (!context)
    throw new Error("useProductsContext must be used within ProductsProvider");
  return context;
};

export default ProductsProvider;
