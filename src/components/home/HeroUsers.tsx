import type { JSX } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import img_1 from "../../assets/portraits/portrait_1.webp";
import img_2 from "../../assets/portraits/portrait_2.webp";
import img_3 from "../../assets/portraits/portrait_3.webp";
import img_4 from "../../assets/portraits/portrait_4.webp";
import img_5 from "../../assets/portraits/portrait_5.webp";
import img_6 from "../../assets/portraits/portrait_6.webp";

function HeroUsers(): JSX.Element {
  return (
    <>
      <div className="flex gap-1 mt-6 lg:mt-10">
        {[img_1, img_2, img_3, img_4, img_5, img_6].map((img, index) => (
          <LazyLoadImage
            key={index}
            effect="blur"
            src={img}
            alt="Customer portrait"
            className={`w-12 h-12 border-2 rounded-full border-brand`}
          />
        ))}
      </div>
      <p className="mt-2 italic text-brand-neutral-dark">
        Join those who already made the choice.
      </p>
    </>
  );
}

export default HeroUsers;
