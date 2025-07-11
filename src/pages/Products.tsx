import ProductsToolbar from "../components/products/ProductsToolbar";
import ProductsGrid from "../components/products/ProductsGrid";
import Loader from "../components/ui/Loader";
import { useProductsContext } from "../context/ProductsProvider";
import Section from "../components/ui/Section";
import { memo } from "react";

function Products() {
  const { products, isLoading, error } = useProductsContext();

  if (isLoading) {
    return (
      <Section className="max-w-6xl">
        <Loader />
      </Section>
    );
  }

  if (error) {
    return (
      <Section className="max-w-6xl">
        <h2>Something went wrong.</h2>
        <p>Please try again later!</p>
      </Section>
    );
  }

  if (!products || products.length === 0) {
    return (
      <Section className="max-w-6xl">
        <p className="text-center font-semibold text-gray-500">
          There are no products.
        </p>
      </Section>
    );
  }

  return (
    <Section className="max-w-6xl">
      <ProductsToolbar />
      <ProductsGrid products={products} />
    </Section>
  );
}

export default memo(Products);
