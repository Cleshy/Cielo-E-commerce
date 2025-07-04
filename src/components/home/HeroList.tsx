import type { JSX } from "react";
import { IoMdArrowDropright } from "react-icons/io";
import Icon from "../ui/Icon";

function HeroList(): JSX.Element {
  return (
    <ul className="flex flex-col gap-1 mt-2 lg:-ml-2">
      <li className="flex items-center gap-0.5 text-gray-600">
        <Icon icon={IoMdArrowDropright} size="1.75rem" color="#b8860b" />
        Premium craftsmanship
      </li>
      <li className="flex items-center gap-0.5 text-gray-600">
        <Icon icon={IoMdArrowDropright} size="1.75rem" color="#b8860b" />
        Sustainable materials
      </li>
      <li className="flex items-center gap-0.5 text-gray-600">
        <Icon icon={IoMdArrowDropright} size="1.75rem" color="#b8860b" />
        Timeless design
      </li>
    </ul>
  );
}

export default HeroList;
