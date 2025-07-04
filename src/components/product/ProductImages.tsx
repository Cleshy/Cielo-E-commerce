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
    <div className="flex flex-col gap-6 md:flex-1">
      <LazyLoadImage
        className="mx-auto max-w-50"
        alt={`Product image of ${productTitle}`}
        src={thumbnail}
      />
      <div className="flex flex-wrap gap-4">
        {images.map((image) => (
          <LazyLoadImage
            className="w-full p-1 mx-auto rounded-lg shadow max-w-20 lg:max-w-25"
            src={image}
            alt={`Product image of ${productTitle}`}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductImages;
