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
      className={`absolute z-50 top-0 left-0 md:relative md:translate-x-0 bg-white w-full h-screen md:w-auto md:h-auto p-5 md:p-0 transition-all duration-300 ease-in-out ${
        showNav ? "translate-x-0" : "-translate-x-[150%]"
      }`}
    >
      <div className="flex items-center justify-between pt-2 pb-5 border-b border-gray-200 md:border-none md:pt-0 md:pb-0">
        <Link
          to="/"
          onClick={closeMenu}
          className="text-lg font-semibold md:hidden"
        >
          Cielo
        </Link>
        <Icon className="md:hidden" icon={IoClose} onClick={closeMenu} />
      </div>
      <ul className="flex flex-col gap-4 mt-3 md:flex-row md:gap-8 md:mt-0">
        <li>
          <Link to="/products" onClick={closeMenu} className="hover:underline">
            The Collection
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
