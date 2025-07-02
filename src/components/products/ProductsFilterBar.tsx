import Button from "../ui/Button";
import { FaSortAmountDown } from "react-icons/fa";
import Icon from "../ui/Icon";

type ProductsFilterBarProps = {
  onClick: () => void;
};

function ProductsFilterBar({ onClick }: ProductsFilterBarProps) {
  return (
    <div className="flex items-center justify-between">
      <Button
        onClick={onClick}
        className="px-4 py-2 text-white transition-all duration-200 ease-in-out rounded bg-brand hover:bg-brand-dark"
      >
        Filter
      </Button>
      <Icon icon={FaSortAmountDown} className="text-brand" size="1.5rem" />
    </div>
  );
}

export default ProductsFilterBar;
