import type { JSX } from "react";
import Loader from "../components/ui/Loader";
import ProductCard from "../components/product/ProductCard";
import RelatedProducts from "../components/relatedproducts/RelatedProducts";
import useProductDetails from "../hooks/useProductDetails";

function Product(): JSX.Element {
  const { product, isLoading } = useProductDetails();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className="relative flex flex-col gap-8 my-4">
      {product && <ProductCard product={product} />}
      {product && <RelatedProducts category={product.category} />}
    </section>
  );
}

export default Product;
