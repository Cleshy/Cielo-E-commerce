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
    <section className="flex flex-col items-center justify-between mt-12 lg:flex-row lg:items-start">
      <div className="flex flex-col items-center flex-1 lg:items-start lg:mt-10">
        <p className="mb-4 text-sm tracking-widest text-center text-gray-500 uppercase">
          Timeless Essentials
        </p>
        <h1 className="text-4xl font-semibold text-center lg:text-left">
          Subtle Elegance. Uncompromising Quality.
        </h1>
        <p className="mt-4 text-center text-gray-600 lg:text-left">
          Discover garments that whisper refinement, not shout for attention.
        </p>

        <Button className="px-4 py-2 my-8 text-lg font-semibold tracking-wide text-white transition-all duration-200 rounded bg-brand hover:bg-brand-dark">
          Explore the Collection
        </Button>
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
        <div className="flex mt-6 lg:mt-10">
          <img
            className="w-10 h-10 border-2 rounded-full opacity-90 border-brand-dark"
            src={portrait_1}
            alt="Customer portrait"
          />
          <img
            className="w-10 h-10 -ml-3 border-2 rounded-full opacity-90 border-brand-dark"
            src={portrait_2}
            alt="Customer portrait"
          />
          <img
            className="w-10 h-10 -ml-3 border-2 rounded-full opacity-90 border-brand-dark"
            src={portrait_3}
            alt="Customer portrait"
          />
          <img
            className="w-10 h-10 -ml-3 border-2 rounded-full opacity-90 border-brand-dark"
            src={portrait_4}
            alt="Customer portrait"
          />
          <img
            className="w-10 h-10 -ml-3 border-2 rounded-full opacity-90 border-brand-dark"
            src={portrait_5}
            alt="Customer portrait"
          />
          <img
            className="w-10 h-10 -ml-3 border-2 rounded-full opacity-90 border-brand-dark"
            src={portrait_6}
            alt="Customer portrait"
          />
        </div>
        <p className="mt-2 italic text-brand-neutral-dark">
          Join those who already made the choice.
        </p>
      </div>
      <img
        loading="eager"
        className="flex-1 hidden max-w-lg mt-20 md:block w-100"
        src={heroImg}
        alt="An image of a luxury parfume."
      />
    </section>
  );
}

export default Hero;
