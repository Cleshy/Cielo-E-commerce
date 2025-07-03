import type { JSX } from "react";
import type { ProductReviewType } from "../../types/types";

type ProductReviewsProps = {
  reviews: ProductReviewType[];
};

function ProductReviews({ reviews }: ProductReviewsProps): JSX.Element {
  const reviewElements = reviews.map((review) => {
    return (
      <div className="py-4 border-b-1 border-brand/10 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <p>{review.date}</p>
          <p>{review.rating}</p>
        </div>
        <p className="text-lg font-semibold">{review.reviewerName}</p>
        <p className="italic">{review.comment}</p>
        <p className="self-end mt-4 text-sm opacity-30">
          {review.reviewerEmail}
        </p>
      </div>
    );
  });

  return <>{reviewElements}</>;
}

export default ProductReviews;
