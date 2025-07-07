import type { JSX } from "react";
import LazyLoadImg from "../ui/LazyLoadImg";

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
      <LazyLoadImg
        className="mx-auto max-w-50"
        alt={`Product image of ${productTitle}`}
        src={thumbnail}
      />
      <div className="flex flex-wrap justify-center gap-3 lg:justify-center">
        {images.map((image, index) => (
          <LazyLoadImg
            key={index}
            className="w-full p-1 mx-auto rounded-lg shadow max-w-20 lg:max-w-22"
            src={image}
            alt={`Product image of ${productTitle}`}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductImages;
