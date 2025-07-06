import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart, FaRegUser, FaRegMoon } from "react-icons/fa";
import type { JSX } from "react";
import Icon from "../../ui/Icon";
import { Link } from "react-router";
import { useWishlistContext } from "../../../context/WishlistProvider";

function NavbarIcons(): JSX.Element {
  const { wishlist } = useWishlistContext();

  return (
    <div className="flex gap-5 ml-auto md:ml-0">
      <div className="flex items-center gap-2">
        <button>
          <Icon icon={FaRegMoon} label="Toggle Dark Mode" />
        </button>
      </div>
      <div className="relative flex items-center gap-2">
        <Link to="/wishlist">
          <Icon icon={FaRegHeart} label="Wishlist" />
        </Link>
        {wishlist.length > 0 && (
          <span className="absolute flex items-center justify-center w-5 h-5 text-xs font-semibold text-white rounded-full bg-brand -top-4 -right-4">
            {wishlist.length}
          </span>
        )}
        <Link
          to="/wishlist"
          className="hidden text-sm xl:block hover:underline"
        >
          Wishlist
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <Link to="/login">
          <Icon icon={FaRegUser} label="Account" />
        </Link>
        <Link to="/login" className="hidden text-sm xl:block hover:underline">
          Login
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <Link to="/cart">
          <Icon icon={FiShoppingCart} label="Cart" />
        </Link>
        <Link to="/cart" className="hidden text-sm xl:block hover:underline">
          Cart
        </Link>
      </div>
    </div>
  );
}

export default NavbarIcons;
