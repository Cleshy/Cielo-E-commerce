import type { JSX } from "react";
import Dropdown from "../ui/Dropdown";
import Button from "../ui/Button";
import { FaFilter } from "react-icons/fa";
import { FaFilterCircleXmark } from "react-icons/fa6";
import Accordion from "../ui/Accordion";
import { productCategories } from "../../utils/productCategories";
import { formatCategory } from "../../utils/textFormat";
import { useProductsContext } from "../../context/ProductsProvider";

function FilterDropdown(): JSX.Element {
  const { category, setCategory } = useProductsContext();

  const clearFilter = (): void => {
    setCategory(null);
  };

  return (
    <>
      <Dropdown
        menuClassNames="min-w-[343px] md:min-w-[600px]"
        origin="left"
        button={
          <Button className="flex items-center gap-2">
            <FaFilter />
            {category ? formatCategory(category) : "Filter"}
          </Button>
        }
      >
        <div className="p-3 w-full">
          <Button
            onClick={() => clearFilter()}
            className="mb-3 flex gap-3 bg-brand-dark hover:bg-brand-neutral-dark"
          >
            <FaFilterCircleXmark />
            Clear filter
          </Button>
          <Accordion
            title="Category"
            wrapperClassName="w-full"
            contentClassName="grid grid-cols-2 md:grid-cols-3 gap-2 mt-4"
          >
            {productCategories.map((category, index) => {
              return (
                <button
                  key={index}
                  className="cursor-pointer text-left pl-1 py-1 text-sm md:text-base hover:bg-brand-dark"
                  onClick={() => setCategory(category)}
                >
                  {formatCategory(category)}
                </button>
              );
            })}
          </Accordion>
        </div>
      </Dropdown>
    </>
  );
}

export default FilterDropdown;
