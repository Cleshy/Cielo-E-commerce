import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart, FaRegUser, FaRegMoon } from "react-icons/fa";
import type { JSX } from "react";
import Icon from "../../ui/Icon";
import { Link } from "react-router";

function NavbarIcons(): JSX.Element {
  return (
    <div className="flex gap-4 ml-auto md:ml-0">
      <div className="flex items-center gap-2">
        <button>
          <Icon icon={FaRegMoon} label="Toggle Dark Mode" />
        </button>
      </div>
      <div className="flex items-center gap-2">
        <Link to="/wishlist">
          <Icon icon={FaRegHeart} label="Wishlist" />
        </Link>
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
