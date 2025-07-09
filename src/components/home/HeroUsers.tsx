import type { JSX } from "react";
import LazyLoadImg from "../ui/LazyLoadImg";

import img_1 from "../../assets/portraits/portrait_1.webp";
import img_2 from "../../assets/portraits/portrait_2.webp";
import img_3 from "../../assets/portraits/portrait_3.webp";
import img_4 from "../../assets/portraits/portrait_4.webp";
import img_5 from "../../assets/portraits/portrait_5.webp";
import img_6 from "../../assets/portraits/portrait_6.webp";

const portraits = [
  { src: img_1, alt: "Customer portrait 1" },
  { src: img_2, alt: "Customer portrait 2" },
  { src: img_3, alt: "Customer portrait 3" },
  { src: img_4, alt: "Customer portrait 4" },
  { src: img_5, alt: "Customer portrait 5" },
  { src: img_6, alt: "Customer portrait 6" },
];

function HeroUsers(): JSX.Element {
  return (
    <section aria-label="Customer portraits">
      <div className="flex gap-1 mt-6 lg:mt-10">
        {portraits.map(({ src, alt }) => (
          <LazyLoadImg
            key={src}
            src={src}
            alt={alt}
            className="w-12 h-12 border-2 rounded-full border-brand"
          />
        ))}
      </div>
      <p className="mt-2 italic text-brand-neutral-dark">
        Join those who already made the choice.
      </p>
    </section>
  );
}

export default HeroUsers;
