import type { JSX } from "react";
import { Link } from "react-router-dom";

function NotFound(): JSX.Element {
  return (
    <section className="text-center flex flex-col items-center gap-8 lg:gap-12 mt-6 md:mt-10">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
        This Page Doesn't Exist.
      </h1>
      <img
        src="/404.svg"
        alt="Illustration representing a missing page."
        className="w-[18rem] md:w-[25rem]"
      />
      <p className="italic text-gray-900">
        Perhaps it once did. Or perhaps it never should have.
      </p>
      <Link
        to="/"
        className="font-medium bg-brand py-2 px-4 rounded text-white hover:bg-brand-dark transition-all duration-200 ease-in-out"
      >
        Return to the Home Page
      </Link>
    </section>
  );
}

export default NotFound;
