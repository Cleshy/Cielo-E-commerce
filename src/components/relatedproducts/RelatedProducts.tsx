import { type JSX } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import RelatedProductCard from "./RelatedProductCard";
import Loader from "../ui/Loader";
import useFetchRelatedProducts from "../../hooks/useFetchRelatedProducts";
import SliderControls from "../ui/SliderControls";

type RelatedProductsProps = {
  category: string;
};

function RelatedProducts({ category }: RelatedProductsProps): JSX.Element {
  const { products, isLoading } = useFetchRelatedProducts(category);

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

  if (!isLoading && (!products || products.length === 0)) {
    return <p>No related products available.</p>;
  }

  return (
    <div className="flex flex-col gap-6 mb-10 max-w-5xl mx-auto xl">
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
      <SliderControls
        onPrev={() => instanceRef.current?.prev()}
        onNext={() => instanceRef.current?.next()}
      />
    </div>
  );
}

export default RelatedProducts;
