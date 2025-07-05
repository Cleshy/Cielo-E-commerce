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
  sort: string;
  order: "asc" | "desc";
  icon: IconType;
};

export const sortOptions: SortOption[] = [
  {
    label: "Default",
    sort: "id",
    order: "asc",
    icon: FaSlidersH,
  },
  {
    label: "Title",
    sort: "title",
    order: "asc",
    icon: FaSortAlphaDown,
  },
  {
    label: "Cheap",
    sort: "price",
    order: "asc",
    icon: FaSortNumericDown,
  },
  {
    label: "Expensive",
    sort: "price",
    order: "desc",
    icon: FaSortNumericDownAlt,
  },
  {
    label: "Rating",
    sort: "rating",
    order: "desc",
    icon: FaRegStar,
  },
];
