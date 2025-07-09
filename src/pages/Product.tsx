import type { JSX } from "react";
import Loader from "../components/ui/Loader";
import ProductCard from "../components/Product/ProductCard";
import RelatedProducts from "../components/RelatedProducts/RelatedProducts";
import useProductDetails from "../hooks/useProductDetails";
import Section from "../components/ui/Section";

function Product(): JSX.Element {
  const { product, isLoading } = useProductDetails();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Section className="relative flex flex-col gap-8">
      {product && <ProductCard product={product} />}
      {product && <RelatedProducts category={product.category} />}
    </Section>
  );
}

export default Product;
