import { type JSX } from "react";
import { IoClose } from "react-icons/io5";
import Icon from "../../ui/Icon";
import { Link } from "react-router";

type NavListType = {
  showNav: boolean;
  closeMenu: () => void;
};

function NavList({ showNav, closeMenu }: NavListType): JSX.Element {
  return (
    <div
      className={`absolute top-0 left-0 md:relative md:translate-x-0 bg-white w-full h-screen md:w-auto md:h-auto p-5 md:p-0 transition-all duration-300 ease-in-out ${
        showNav ? "translate-x-0" : "-translate-x-[150%]"
      }`}
    >
      <div className="flex items-center justify-between border-b border-gray-200 md:border-none pt-2 md:pt-0 pb-5 md:pb-0">
        <Link to="/" className="text-lg font-semibold md:hidden">
          Cielo
        </Link>
        <Icon className="md:hidden" icon={IoClose} onClick={closeMenu} />
      </div>
      <ul className="flex flex-col md:flex-row gap-4 md:gap-8 mt-3 md:mt-0">
        <li>
          <Link to="/shop" onClick={closeMenu} className="hover:underline">
            Shop
          </Link>
        </li>
        <li>
          <Link
            to="/categories"
            onClick={closeMenu}
            className="hover:underline"
          >
            Categories
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={closeMenu} className="hover:underline">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={closeMenu} className="hover:underline">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavList;
