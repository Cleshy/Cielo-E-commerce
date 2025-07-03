import type { JSX } from "react";
import type { ProductType } from "../types/types";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Loader from "../components/ui/Loader";
import { FaArrowLeft } from "react-icons/fa";
import Icon from "../components/ui/Icon";
import Button from "../components/ui/Button";
import ProductCard from "../components/product/ProductCard";

function Product(): JSX.Element {
  const [product, setProduct] = useState<ProductType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);

        if (!res.ok) return;

        const data = await res.json();

        setProduct(data);
        console.log(data);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className="relative my-4">
      {product && <ProductCard product={product} />}
      <Link to="/products">
        <Icon
          className="fixed bottom-5 left-5 bg-brand text-white p-2 rounded-full"
          size="2.5rem"
          icon={FaArrowLeft}
        />
      </Link>
    </section>
  );
}

export default Product;
