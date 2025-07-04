import type { JSX } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

type ProductReviewStarsProps = {
  rating: number;
};

function ProductReviewStars({ rating }: ProductReviewStarsProps): JSX.Element {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) =>
        i < rating ? (
          <FaStar className="text-yellow-500" key={i} />
        ) : (
          <FaRegStar className="opacity-60" key={i} />
        )
      )}
    </div>
  );
}

export default ProductReviewStars;
