export type ReviewType = {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
};

export type ProductType = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  tags: string[];
  brand: string;
  sku: string;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: ReviewType[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  thumbnail: string;
  images: string[];
  stock: number;
};

export type ProductReviewType = {
  comment: string;
  date: string;
  rating: number;
  reviewerEmail: string;
  reviewerName: string;
};

export type UseFetchProductsParams = {
  sort?: string | null;
  order?: string;
  limit?: number;
  skip?: number;
  category?: string | null;
};

export type UseFetchProductsResult = {
  products: ProductType[] | null;
  isLoading: boolean;
  error: string | null;
  refetch: () => void;
};

export type CartItemType = ProductType & { quantity: number };
