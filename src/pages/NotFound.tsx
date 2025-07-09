import type { JSX } from "react";
import { Link } from "react-router-dom";
import LazyLoadImg from "../components/ui/LazyLoadImg";
import Section from "../components/ui/Section";

function NotFound(): JSX.Element {
  return (
    <Section className="flex flex-col items-center gap-8 text-center lg:gap-12">
      <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl">
        This Page Doesn't Exist.
      </h1>
      <LazyLoadImg
        src="/404.svg"
        alt="Illustration representing a missing page."
        className="w-[18rem] md:w-[25rem]"
      />
      <p className="italic text-gray-900">
        Perhaps it once did. Or perhaps it never should have.
      </p>
      <Link
        to="/"
        className="px-4 py-2 font-medium text-white transition-all duration-200 ease-in-out rounded bg-brand hover:bg-brand-dark"
      >
        Return to the Home Page
      </Link>
    </Section>
  );
}

export default NotFound;
