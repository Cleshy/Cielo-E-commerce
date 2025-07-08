import { Link } from "react-router-dom";
import type { JSX } from "react";
import { footerLinksSection } from "../../../utils/footerLinks";

function FooterLinks(): JSX.Element {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-6 gap-y-6 md:border-b-1 md:border-brand/50 md:pb-8">
      {footerLinksSection.map((section) => (
        <div key={section.title}>
          <h3 className="text-lg lg:text-xl mb-1 font-medium">
            {section.title}
          </h3>
          <ul className="space-y-1">
            {section.links.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-xs lg:text-sm font-light hover:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default FooterLinks;
