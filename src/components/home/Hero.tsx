import type { JSX } from "react";
import Button from "../ui/Button";
import { IoMdArrowDropright } from "react-icons/io";
import Icon from "../ui/Icon";
import heroImg from "../../assets/hero_img.png";

import portrait_1 from "../../assets/portraits/portrait_1.webp";
import portrait_2 from "../../assets/portraits/portrait_2.webp";
import portrait_3 from "../../assets/portraits/portrait_3.webp";
import portrait_4 from "../../assets/portraits/portrait_4.webp";
import portrait_5 from "../../assets/portraits/portrait_5.webp";
import portrait_6 from "../../assets/portraits/portrait_6.webp";

function Hero(): JSX.Element {
  return (
    <section className="mt-12 flex flex-col lg:flex-row items-center lg:items-start justify-between">
      <div className="flex-1 flex flex-col items-center lg:items-start lg:mt-10">
        <p className="text-sm uppercase tracking-widest text-gray-500 text-center mb-4">
          Timeless Essentials
        </p>
        <h1 className="text-4xl font-semibold text-center lg:text-left">
          Subtle Elegance. Uncompromising Quality.
        </h1>
        <p className="text-center lg:text-left text-gray-600 mt-4">
          Discover garments that whisper refinement, not shout for attention.
        </p>

        <Button className="bg-brand hover:bg-brand-dark transition-all duration-200 py-2 px-4 rounded text-white text-lg font-semibold tracking-wide my-8">
          Explore the Collection
        </Button>
        <ul className="mt-2 flex flex-col gap-1 lg:-ml-2">
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
        <div className="flex mt-6 lg:mt-10">
          <img
            className="rounded-full opacity-90 border-2 border-brand-dark w-10 h-10"
            src={portrait_1}
            alt="Customer portrait"
          />
          <img
            className="rounded-full opacity-90 border-2 border-brand-dark -ml-3 w-10 h-10"
            src={portrait_2}
            alt="Customer portrait"
          />
          <img
            className="rounded-full opacity-90 border-2 border-brand-dark -ml-3 w-10 h-10"
            src={portrait_3}
            alt="Customer portrait"
          />
          <img
            className="rounded-full opacity-90 border-2 border-brand-dark -ml-3 w-10 h-10"
            src={portrait_4}
            alt="Customer portrait"
          />
          <img
            className="rounded-full opacity-90 border-2 border-brand-dark -ml-3 w-10 h-10"
            src={portrait_5}
            alt="Customer portrait"
          />
          <img
            className="rounded-full opacity-90 border-2 border-brand-dark -ml-3 w-10 h-10"
            src={portrait_6}
            alt="Customer portrait"
          />
        </div>
        <p className="mt-2 text-brand-neutral-dark italic">
          Join those who already made the choice.
        </p>
      </div>
      <img
        className="hidden md:block flex-1 w-100 max-w-lg mt-20"
        src={heroImg}
        alt="An image of a luxury parfume."
      />
    </section>
  );
}

export default Hero;
