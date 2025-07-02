import type { JSX, ReactNode } from "react";
import Icon from "./Icon";
import { IoIosArrowUp } from "react-icons/io";

type AccordionProps = {
  title: string;
  children: ReactNode;
  showItem: boolean;
  onClick: () => void;
};

function Accordion({
  title,
  children,
  showItem,
  onClick,
}: AccordionProps): JSX.Element {
  return (
    <div className="rounded bg-brand/20">
      {/* Accordion title + Icon */}
      <div className="flex items-center justify-between px-2 py-1">
        <p className="font-semibold tracking-wide">{title}</p>
        <Icon
          icon={IoIosArrowUp}
          size="1.5rem"
          onClick={onClick}
          className={`transition-transform duration-300 ease-in-out ${
            showItem && "rotate-180"
          }`}
        />
      </div>
      {/* Accordion content */}
      {showItem && <div className="h-full p-2">{children}</div>}
    </div>
  );
}

export default Accordion;
