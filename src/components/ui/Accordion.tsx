import { useState, type ReactNode, type JSX } from "react";
import { IoIosArrowUp } from "react-icons/io";
import type { IconType } from "react-icons";

type AccordionProps = {
  title: string;
  children: ReactNode;
  icon?: IconType;
  isOpen?: boolean;
  defaultOpen?: boolean;
  onToggle?: (open: boolean) => void;
  wrapperClassName?: string;
  headerClassName?: string;
  contentClassName?: string;
};

function Accordion({
  title,
  children,
  icon: Icon = IoIosArrowUp,
  isOpen,
  defaultOpen = false,
  onToggle,
  wrapperClassName = "rounded bg-brand/20",
  headerClassName = "flex gap-5 items-center justify-between cursor-pointer",
  contentClassName = "h-full p-2",
}: AccordionProps): JSX.Element {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const isControlled = isOpen !== undefined;
  const open = isControlled ? isOpen : internalOpen;

  const handleToggle = () => {
    if (!isControlled) setInternalOpen((prev) => !prev);
    onToggle?.(!open);
  };

  return (
    <div className={wrapperClassName}>
      <div className={headerClassName} onClick={handleToggle}>
        <p className="font-semibold tracking-wide">{title}</p>
        {Icon && (
          <Icon
            size="1.25rem"
            className={`transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          />
        )}
      </div>
      {open && <div className={contentClassName}>{children}</div>}
    </div>
  );
}

export default Accordion;
