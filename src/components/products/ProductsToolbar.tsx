import SortDropdown from "./SortDropdown";
import FilterDropdown from "./FilterDropdown";

type ProductsToolbarProps = {
  sort: string;
  setSortBy: (sortBy: string) => void;
  setOrderBy: (order: "asc" | "desc") => void;
  category: string | null;
  setCategory: (value: string) => void;
};

function ProductsToolbar({
  sort,
  setSortBy,
  setOrderBy,
  category,
  setCategory,
}: ProductsToolbarProps) {
  return (
    <div className="flex items-center justify-between">
      <FilterDropdown category={category} setCategory={setCategory} />
      <SortDropdown sort={sort} setSortBy={setSortBy} setOrderBy={setOrderBy} />
    </div>
  );
}

export default ProductsToolbar;
