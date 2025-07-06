import { useEffect, useState, type JSX } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import type { ProductType } from "../../types/types";
import RelatedProductCard from "./RelatedProductCard";
import Loader from "../ui/Loader";

type RelatedProductsProps = {
  category: string;
};

function RelatedProducts({ category }: RelatedProductsProps): JSX.Element {
  const [products, setProducts] = useState<ProductType[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchRelatedProducts = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(
          `https://dummyjson.com/products/category/${category}?limit=10`
        );

        if (!res.ok) {
          console.error("Something went wrong");
        }

        const data = await res.json();
        setProducts(data.products);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };

    fetchRelatedProducts();
  }, []);

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      slides: {
        perView: 1,
      },
      breakpoints: {
        "(min-width: 768px)": {
          slides: {
            perView: 2,
            spacing: 24,
          },
        },
        "(min-width: 1024px)": {
          slides: {
            perView: 3,
            spacing: 24,
          },
        },
        "(min-width: 1280px)": {
          slides: {
            perView: 4,
            spacing: 24,
          },
        },
      },
    },
    []
  );

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="flex flex-col gap-6 mb-10">
      <h2 className="text-2xl font-semibold">You Might Also Like</h2>
      <div ref={sliderRef} className="py-2 keen-slider">
        {products?.map((product) => (
          <div
            key={product.id}
            className="keen-slider__slide w-[280px] mx-auto bg-white shadow rounded-lg p-5"
          >
            <RelatedProductCard product={product} />
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-4 mb-4">
        <button
          className="px-4 py-1 text-2xl text-white rounded cursor-pointer bg-brand hover:bg-brand-dark"
          onClick={() => instanceRef.current?.prev()}
        >
          ‹
        </button>
        <button
          className="px-4 py-1 text-2xl text-white rounded cursor-pointer bg-brand hover:bg-brand-dark"
          onClick={() => instanceRef.current?.next()}
        >
          ›
        </button>
      </div>
    </div>
  );
}

export default RelatedProducts;
