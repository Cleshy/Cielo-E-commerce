import type { IconType } from "react-icons";
import type { JSX } from "react";
import clsx from "clsx";

type IconProps = {
  icon: IconType;
  size?: string;
  color?: string;
  className?: string;
  label?: string;
  onClick?: () => void;
};

function Icon({
  icon: IconComponent,
  size = "1.25rem",
  color,
  className = "",
  label,
  onClick,
}: IconProps): JSX.Element {
  return (
    <IconComponent
      role={label ? "img" : undefined}
      aria-label={label}
      onClick={onClick}
      size={size}
      color={color}
      className={clsx(className, "cursor-pointer")}
    />
  );
}

export default Icon;
