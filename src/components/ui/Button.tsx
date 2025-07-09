import type { JSX, ReactNode } from "react";
import clsx from "clsx";

const VARIANTS = ["primary", "secondary"] as const;
const SIZES = ["sm", "md", "lg"] as const;

type ButtonVariant = (typeof VARIANTS)[number];
type ButtonSize = (typeof SIZES)[number];

type ButtonProps = {
  children: ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  variant?: ButtonVariant;
  type?: "button" | "submit" | "reset";
  size?: ButtonSize;
  className?: string;
  disabled?: boolean;
};

function Button({
  children,
  onClick,
  variant = "primary",
  type = "button",
  size = "md",
  className = "",
  disabled = false,
}: ButtonProps): JSX.Element {
  const base =
    "cursor-pointer inline-flex items-center justify-center font-medium rounded-md transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed";

  const variantStyle = {
    primary: "bg-brand hover:bg-brand-dark disabled:hover:bg-brand text-white",
    secondary:
      "bg-brand-dark hover:bg-brand disabled:hover:bg-brand-dark text-white",
  };

  const sizeStyles = {
    sm: "py-2 px-3 text-sm",
    md: "py-1.5 px-4",
    lg: "py-2 px-5 text-lg",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(base, variantStyle[variant], sizeStyles[size], className)}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
