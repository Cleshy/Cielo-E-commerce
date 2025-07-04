import {
  FaSortAlphaDown,
  FaRegStar,
  FaSortNumericDown,
  FaSortNumericDownAlt,
  FaSlidersH,
} from "react-icons/fa";

import type { IconType } from "react-icons";

type SortOption = {
  label: string;
  sortBy: string;
  order: "asc" | "desc";
  icon: IconType;
};

export const sortOptions: SortOption[] = [
  {
    label: "Default",
    sortBy: "id",
    order: "asc",
    icon: FaSlidersH,
  },
  {
    label: "Title",
    sortBy: "title",
    order: "asc",
    icon: FaSortAlphaDown,
  },
  {
    label: "Cheap",
    sortBy: "price",
    order: "asc",
    icon: FaSortNumericDown,
  },
  {
    label: "Expensive",
    sortBy: "price",
    order: "desc",
    icon: FaSortNumericDownAlt,
  },
  {
    label: "Rating",
    sortBy: "rating",
    order: "desc",
    icon: FaRegStar,
  },
];
