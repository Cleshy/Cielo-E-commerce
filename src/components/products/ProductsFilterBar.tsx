import Button from "../ui/Button";
import { FaSortAmountDown } from "react-icons/fa";
import Icon from "../ui/Icon";

type ProductsFilterBarProps = {
  onClick: () => void;
};

function ProductsFilterBar({ onClick }: ProductsFilterBarProps) {
  return (
    <div className="flex items-center justify-between">
      <Button onClick={onClick} size="lg">
        Filter
      </Button>
      <Icon icon={FaSortAmountDown} className="text-brand" size="1.5rem" />
    </div>
  );
}

export default ProductsFilterBar;
