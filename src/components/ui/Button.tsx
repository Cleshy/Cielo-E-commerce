import type { JSX, ReactNode } from "react";
import clsx from "clsx";

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
};

function Button({
  children,
  onClick,
  type = "button",
  className = "",
}: ButtonProps): JSX.Element {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx("cursor-pointer", className)}
    >
      {children}
    </button>
  );
}

export default Button;
