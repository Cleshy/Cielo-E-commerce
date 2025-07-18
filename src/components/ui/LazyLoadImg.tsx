import type { JSX } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

type LazyLoadImgProps = {
  src: string;
  alt: string;
  className?: string;
};

function LazyLoadImg({
  src,
  alt,
  className = "",
}: LazyLoadImgProps): JSX.Element {
  return (
    <LazyLoadImage src={src} alt={alt} effect="blur" className={className} />
  );
}

export default LazyLoadImg;
