import type { JSX } from "react";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";

import LazyLoadImg from "../ui/LazyLoadImg";
import heroImg from "../../assets/hero_img.png";

import HeroUsers from "./HeroUsers";
import HeroList from "./HeroList";

import Section from "../ui/Section";

function Hero(): JSX.Element {
  const navigate = useNavigate();

  return (
    <Section ariaLabelledby="Hero heading" className="max-w-6xl">
      <div className="flex flex-col lg:flex-row lg:gap-25 justify-between">
        <div className="flex flex-col lg:items-start items-center">
          <p className="mb-4 text-sm tracking-widest text-center text-gray-500 uppercase">
            Timeless Essentials
          </p>
          <h1
            id="main-heading"
            className="text-4xl font-semibold text-center lg:text-left"
          >
            Subtle Elegance. <br /> Uncompromising Quality.
          </h1>
          <p className="mt-4 text-center text-gray-600 lg:text-left">
            Discover garments that whisper refinement, not shout for attention.
          </p>
          <Button
            onClick={() => navigate("/products")}
            size="lg"
            className="my-6"
          >
            Explore the Collection
          </Button>
          <HeroList />
          <HeroUsers />
        </div>
        <LazyLoadImg
          src={heroImg}
          alt="Luxury perfume bottle on a minimal background"
          className="hidden max-w-xl mt-20 md:block w-100"
        />
      </div>
    </Section>
  );
}

export default Hero;
