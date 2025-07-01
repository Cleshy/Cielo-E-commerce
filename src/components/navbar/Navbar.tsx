import { useLayoutEffect, useEffect, useRef, useState, type JSX } from "react";
import { FiMenu } from "react-icons/fi";
import Icon from "../ui/Icon";
import clsx from "clsx";
import NavbarIcons from "./NavbarIcons";
import NavList from "../navbar/NavList";

const SCROLL_THRESHOLD = 400;

function Navbar(): JSX.Element {
  const [isFixed, setIsFixed] = useState<boolean>(false);
  const [showNav, setShowNav] = useState<boolean>(false);
  const [navHeight, setNavHeight] = useState<number>(0);
  const navRef = useRef<HTMLDivElement | null>(null);

  const openMenu = (): void => {
    setShowNav(true);
  };

  const closeMenu = (): void => {
    setShowNav(false);
  };

  useLayoutEffect(() => {
    if (navRef.current) {
      setNavHeight(navRef.current.offsetHeight);
    }
  }, []);

  useEffect(() => {
    const handleScroll = (): void => {
      setIsFixed(window.scrollY > SCROLL_THRESHOLD);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* // Leave space when nav becomes fixed on scroll */}
      {isFixed && (
        <div
          style={{
            height: navHeight,
          }}
        />
      )}

      <header
        ref={navRef}
        className={clsx(
          "bg-white w-full transition-all duration-300 ease-in-out z-50 p-5",
          isFixed ? "fixed top-0" : "relative"
        )}
      >
        <nav className="container mx-auto flex items-center lg:px-20 gap-4 md:gap-0 md:justify-between">
          <Icon
            className="md:hidden"
            icon={FiMenu}
            onClick={openMenu}
            label="Menu"
          />
          <a href="#" className="text-xl font-semibold tracking-wider">
            Cielo
          </a>
          <NavList showNav={showNav} onClick={closeMenu} />
          <NavbarIcons />
        </nav>
      </header>
    </>
  );
}

export default Navbar;
