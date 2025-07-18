import type { JSX } from "react";
import Dropdown from "../ui/Dropdown";
import Button from "../ui/Button";
import { sortOptions } from "../../constants/sortOptions";
import { TiArrowUnsorted } from "react-icons/ti";
import { useProductsContext } from "../../context/ProductsProvider";
import { setFirstLetterUppercase } from "../../utils/textFormat";

function SortDropdown(): JSX.Element {
  const { sort, setSort, setOrder, isLoading } = useProductsContext();

  const handleSortChange = (sort: string, order: "asc" | "desc") => {
    setSort(sort);
    setOrder(order);
  };

  return (
    <Dropdown
      origin="right"
      button={
        <Button disabled={isLoading} className="flex items-center gap-1">
          <TiArrowUnsorted size="1.25rem" />
          {sort && sort === "id" ? "Default" : setFirstLetterUppercase(sort)}
          {!sort && "Sort"}
        </Button>
      }
    >
      <ul>
        {sortOptions.map(({ label, sort, order, icon: Icon }) => (
          <li
            key={`${sort}-${order}`}
            onClick={() => handleSortChange(sort, order)}
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
