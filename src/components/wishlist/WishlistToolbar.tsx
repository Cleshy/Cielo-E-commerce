import type { JSX } from "react";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";
import { useWishlistContext } from "../../context/WishlistProvider";

function WishlistToolbar(): JSX.Element {
  const { clearWishlist } = useWishlistContext();

  const navigate = useNavigate();

  return (
    <div className="flex justify-between">
      <Button size="sm" onClick={() => navigate("/products")}>
        Collection
      </Button>
      <Button size="sm" onClick={clearWishlist}>
        Clear Wishlist
      </Button>
    </div>
  );
}

export default WishlistToolbar;
