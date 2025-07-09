import type { JSX, ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  ariaLabelledby?: string;
};

function Section({
  children,
  className = "",
  ariaLabelledby,
}: SectionProps): JSX.Element {
  return (
    <section
      aria-labelledby={ariaLabelledby}
      className={`mt-8 mb-12 max-w-6xl w-full mx-auto px-4 ${className}`}
    >
      {children}
    </section>
  );
}

export default Section;
