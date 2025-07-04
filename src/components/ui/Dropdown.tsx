import { useState, type JSX, type ReactNode, useRef, useEffect } from "react";

type DropdownProps = {
  origin: string;
  button: ReactNode;
  children: ReactNode;
};

function Dropdown({ origin, button, children }: DropdownProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.addEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative inline-block text-left">
      <div onClick={toggleDropdown} className="cursor-pointer">
        {button}
      </div>
      {isOpen && (
        <div
          className={`absolute ${origin}-0 z-10 mt-2 origin-top-${origin} rounded bg-brand shadow-lg text-white`}
        >
          {children}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
