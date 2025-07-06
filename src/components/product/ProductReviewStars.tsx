import type { JSX } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

type ProductReviewStarsProps = {
  rating: number;
  starClassName?: string;
  containerClassName?: string;
};

function ProductReviewStars({
  rating,
  starClassName = "",
  containerClassName = "",
}: ProductReviewStarsProps): JSX.Element {
  return (
    <div className={`flex gap-0.5 ${containerClassName}`}>
      {[...Array(5)].map((_, i) =>
        i < rating ? (
          <FaStar className={`text-yellow-500 ${starClassName}`} key={i} />
        ) : (
          <FaRegStar className={`opacity-30 ${starClassName}`} key={i} />
        )
      )}
    </div>
  );
}

export default ProductReviewStars;
