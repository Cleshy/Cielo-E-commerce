import type { JSX } from "react";
import type { ProductReviewType } from "../../types/types";
import { formatReviewDate } from "../../utils/formatDate";
import ProductReviewStars from "./ProductReviewStars";

type ProductReviewsProps = {
  reviews: ProductReviewType[];
};

function ProductReviews({ reviews }: ProductReviewsProps): JSX.Element {
  const reviewElements = reviews.map((review, index) => {
    return (
      <div
        key={index}
        className="py-4 not-last:border-b-1 border-brand/10 flex flex-col gap-2"
      >
        <div className="flex items-center justify-between">
          <p className="text-xs opacity-50">{formatReviewDate(review.date)}</p>
          <ProductReviewStars rating={review.rating} />
        </div>
        <p className="text-lg font-bold">{review.reviewerName}</p>
        <p className="text-sm">{review.comment}</p>
        <p className="self-end mt-4 text-xs opacity-30">
          {review.reviewerEmail}
        </p>
      </div>
    );
  });

  return <>{reviewElements}</>;
}

export default ProductReviews;
