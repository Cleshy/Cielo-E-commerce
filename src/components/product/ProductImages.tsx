import type { JSX } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

type ProductImagesProps = {
  thumbnail: string;
  productTitle: string;
  images: string[];
};

function ProductImages({
  thumbnail,
  productTitle,
  images,
}: ProductImagesProps): JSX.Element {
  return (
    <div className="flex flex-col gap-6">
      <LazyLoadImage
        className="max-w-50 mx-auto"
        alt={`Product image of ${productTitle}`}
        src={thumbnail}
      />
      <div className="flex">
        {images.map((image) => (
          <LazyLoadImage
            className="max-w-20 mx-auto w-full shadow rounded-xl p-1"
            src={image}
            alt={`Product image of ${productTitle}`}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductImages;
