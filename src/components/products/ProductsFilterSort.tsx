import { useState, type JSX } from "react";
import { IoClose } from "react-icons/io5";
import Icon from "../ui/Icon";
import Modal from "../ui/Modal";
import Accordion from "../ui/Accordion";
import { productCategories } from "../../utils/productCategories";
import { formatCategory } from "../../utils/textFormat";
import Button from "../ui/Button";

type FilterSortProps = {
  showFilterModal: boolean;
  closeFilterModal: () => void;
  setCategory: (category: string) => void;
};

function ProductsFilterSort({
  setCategory,
  showFilterModal,
  closeFilterModal,
}: FilterSortProps): JSX.Element {
  const [showCategories, setShowCategories] = useState<boolean>(false);

  const handleShowCategories = (): void => {
    setShowCategories((prev) => !prev);
  };

  const handleSelection = (category: string): void => {
    setCategory(category);
    closeFilterModal();
  };

  return (
    <Modal showModal={showFilterModal}>
      <div className="flex items-center justify-between pb-3 border-b-2 border-brand/30">
        <h3 className="text-xl font-medium">Filter</h3>
        <Icon onClick={closeFilterModal} icon={IoClose} size="1.75rem" />
      </div>
      <div className="flex flex-col gap-4 mt-6">
        <Accordion
          title="Filter by Categories"
          onClick={handleShowCategories}
          showItem={showCategories}
        >
          <div className="grid grid-cols-2 gap-x-2 gap-y-4">
            {productCategories.map((category): JSX.Element => {
              return (
                <Button
                  key={category}
                  className="text-left"
                  onClick={() => handleSelection(category)}
                >
                  {formatCategory(category)}
                </Button>
              );
            })}
          </div>
        </Accordion>
        <Accordion
          title="Filter by Price"
          onClick={handleShowCategories}
          showItem={showCategories}
        >
          <div className="grid grid-cols-2 gap-x-2 gap-y-4">
            {productCategories.map((category): JSX.Element => {
              return (
                <Button
                  key={category}
                  className="text-left"
                  onClick={() => handleSelection(category)}
                >
                  {formatCategory(category)}
                </Button>
              );
            })}
          </div>
        </Accordion>
      </div>
    </Modal>
  );
}

export default ProductsFilterSort;
