import type { JSX } from "react";
import { Link } from "react-router-dom";
import LazyLoadImg from "../ui/LazyLoadImg";
import Section from "../ui/Section";

function EmptyCart(): JSX.Element {
  return (
    <Section
      aria-labelledby="Empty cart heading"
      className="flex flex-col itmes-center"
    >
      <h1
        id="empty-cart-heading"
        className="text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-dark"
      >
        Your cart is currently empty.
      </h1>
      <LazyLoadImg
        className="w-[70%] lg:w-[30%] mx-auto mt-8"
        src="/cart.svg"
        alt="An illustration about an empty cart."
      />
      <p className="mt-12 text-center">
        Back to{" "}
        <Link
          to="/products"
          className="font-bold text-brand hover:text-brand-dark"
        >
          Shopping &rarr;
        </Link>
      </p>
    </Section>
  );
}

export default EmptyCart;
