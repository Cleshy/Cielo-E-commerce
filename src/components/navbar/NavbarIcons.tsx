import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart, FaRegUser, FaRegMoon } from "react-icons/fa";
import type { JSX } from "react";
import Icon from "../ui/Icon";

function NavbarIcons(): JSX.Element {
  return (
    <div className="flex gap-4 ml-auto md:ml-0">
      <div className="flex items-center gap-2">
        <Icon icon={FaRegMoon} label="Toggle Dark Mode" />
        <a href="#" className="hidden xl:block text-sm hover:underline">
          Dark Mode
        </a>
      </div>
      <div className="flex items-center gap-2">
        <Icon icon={FaRegHeart} label="Wishlist" />
        <a href="#" className="hidden xl:block text-sm hover:underline">
          Wishlist
        </a>
      </div>
      <div className="flex items-center gap-2">
        <Icon icon={FaRegUser} label="Account" />
        <a href="#" className="hidden xl:block text-sm hover:underline">
          Account
        </a>
      </div>
      <div className="flex items-center gap-2">
        <Icon icon={FiShoppingCart} label="Cart" />
        <a href="#" className="hidden xl:block text-sm hover:underline">
          Cart
        </a>
      </div>
    </div>
  );
}

export default NavbarIcons;
