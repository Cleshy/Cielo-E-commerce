import type { JSX } from "react";
import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";

function FooterSocials(): JSX.Element {
  return (
    <div className="lg:flex-1">
      <h2 className="text-xl font-semibold">Social Media</h2>
      <div className="flex gap-3 *:text-4xl *:rounded-full mt-3 *:hover:bg-white *:p-1">
        <FaFacebook className="text-white hover:text-facebook transition-colors" />
        <FaInstagram className="text-white hover:text-instagram transition-colors" />
        <FaPinterest className="text-white hover:text-pinterest transition-colors" />
      </div>
    </div>
  );
}

export default FooterSocials;
