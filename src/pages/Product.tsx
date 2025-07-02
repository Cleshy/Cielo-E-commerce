import type { JSX } from "react";
import type { ProductType } from "../types/types";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Loader from "../components/ui/Loader";

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
    <div>
      <Link to="/products">Back to the collection</Link>
      <h1>Product</h1>
      <p>{}</p>
    </div>
  );
}

export default Product;
