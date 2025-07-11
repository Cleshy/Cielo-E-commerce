import type { JSX } from "react";
import Section from "../components/ui/Section";

function About(): JSX.Element {
  return (
    <Section ariaLabelledby="About heading" className="max-w-6xl">
      <div className="flex flex-col gap-4 pb-8 text-center border-b-2 border-brand/20 lg:border-none">
        <h1 id="about-heading" className="text-4xl font-semibold">
          About Us
        </h1>
        <p className="mx-auto text-justify text-gray-700">
          Welcome to our curated emporium of fine products, where timeless
          elegance meets modern convenience. Our mission is to offer discerning
          customers a refined and effortless shopping experience, grounded in
          trust and quality.
        </p>
        <img
          src="/about.svg"
          className="w-[80%] lg:w-[30%] mt-12 mx-auto"
          alt=""
        />
      </div>
      <div className="py-10 text-center">
        <h2 className="mb-4 text-3xl font-medium">Our Ethos</h2>
        <p className="mx-auto text-justify text-gray-700">
          In a world of fleeting trends, we celebrate enduring value. Our
          platform is crafted to serve those who appreciate subtle
          sophistication and thoughtful selection, presenting each product with
          clarity and grace.
        </p>
      </div>
      <div className="text-left">
        <h2 className="mb-6 text-3xl font-medium text-center">What We Offer</h2>
        <ul className="flex flex-col gap-4 pl-6 mx-auto text-sm text-gray-700 list-disc marker:text-brand">
          <li>
            <strong>A Thoughtful Wishlist</strong>: Preserve your favored
            selections with ease, safeguarded locally to ensure your preferences
            are always at hand — discreet and reliable.
          </li>
          <li>
            <strong>Distinguished Product Details</strong>: Each item is
            showcased with meticulous care, including detailed descriptions,
            genuine images, and honest ratings, allowing you to make informed
            choices with confidence.
          </li>
          <li>
            <strong>Graceful Navigation</strong>: Seamless transitions accompany
            your journey through our collection, allowing you to explore without
            interruption.
          </li>
          <li>
            <strong>Elegant Responsiveness</strong>: Whether at your study desk
            or on the move, our site adapts gracefully to any device, providing
            an impeccable browsing experience.
          </li>
          <li>
            <strong>Subtle Dark Mode</strong>: A refined option to soothe the
            eyes, blending effortlessly with your surroundings.
          </li>
        </ul>
      </div>
    </Section>
  );
}

export default About;
