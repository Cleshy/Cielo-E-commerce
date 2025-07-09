import type { JSX } from "react";
import Button from "../ui/Button";
import { Link, useNavigate } from "react-router-dom";

import LazyLoadImg from "../ui/LazyLoadImg";
import heroImg from "../../assets/hero_img.png";

import HeroUsers from "./HeroUsers";
import HeroList from "./HeroList";

import Section from "../ui/Section";

function Hero(): JSX.Element {
  const navigate = useNavigate();

  return (
    <Section ariaLabelledby="Hero heading">
      <div className="flex flex-col items-center flex-1 lg:items-start lg:mt-10">
        <p className="mb-4 text-sm tracking-widest text-center text-gray-500 uppercase">
          Timeless Essentials
        </p>
        <h1
          id="main-heading"
          className="text-4xl font-semibold text-center lg:text-left"
        >
          Subtle Elegance. Uncompromising Quality.
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
        className="flex-1 hidden max-w-xl mt-20 md:block w-100"
      />
    </Section>
  );
}

export default Hero;
