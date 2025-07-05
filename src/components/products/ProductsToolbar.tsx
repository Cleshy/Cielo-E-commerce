import SortDropdown from "./SortDropdown";
import FilterDropdown from "./FilterDropdown";

function ProductsToolbar() {
  return (
    <div className="flex items-center justify-between">
      <FilterDropdown />
      <SortDropdown />
    </div>
  );
}

export default ProductsToolbar;
