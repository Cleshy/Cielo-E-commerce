import type { JSX } from "react";
import FooterHeading from "./FooterHeading";
import FooterLinks from "./FooterLinks";
import FooterNewsletter from "./FooterNewsletter";
import FooterSocials from "./FooterSocials";
import FooterCopyright from "./FooterCopyright";

function Footer(): JSX.Element {
  return (
    <footer className="bg-brand-darkest text-white flex flex-col gap-5 py-8">
      <div className="max-w-6xl flex flex-col gap-4 lg:gap-12 px-5">
        <FooterHeading />
        <FooterLinks />
        <div className="flex flex-col gap-8 mt-8 md:flex-row md:gap-24 md:border-b-1 md:pb-6 md:border-brand/50">
          <FooterNewsletter />
          <FooterSocials />
        </div>
        <FooterCopyright />
      </div>
    </footer>
  );
}

export default Footer;
