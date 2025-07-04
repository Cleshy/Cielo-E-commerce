import type { JSX } from "react";
import Dropdown from "../ui/Dropdown";
import Button from "../ui/Button";
import { sortOptions } from "../../constants/sortOptions";
import { TiArrowUnsorted } from "react-icons/ti";

type SortDropdownProps = {
  sort: string;
  setSortBy: (sortBy: string) => void;
  setOrderBy: (order: "asc" | "desc") => void;
};

function SortDropdown({
  sort,
  setSortBy,
  setOrderBy,
}: SortDropdownProps): JSX.Element {
  const handleSortChange = (sortBy: string, order: "asc" | "desc") => {
    setSortBy(sortBy);
    setOrderBy(order);
  };

  return (
    <Dropdown
      origin="right"
      button={
        <Button className="flex items-center gap-1">
          <TiArrowUnsorted size="1.25rem" />
          {sort ? sort : "Sort"}
        </Button>
      }
    >
      <ul>
        {sortOptions.map(({ label, sortBy, order, icon: Icon }) => (
          <li
            key={`${sortBy}-${order}`}
            onClick={() => handleSortChange(sortBy, order)}
            className="flex items-center gap-2 px-4 py-2 hover:bg-brand-dark cursor-pointer"
          >
            <Icon className="text-lg" />
            {label}
          </li>
        ))}
      </ul>
    </Dropdown>
  );
}

export default SortDropdown;
