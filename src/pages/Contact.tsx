import type { JSX } from "react";
import Section from "../components/ui/Section";
import Button from "../components/ui/Button";

function Contact(): JSX.Element {
  return (
    <Section ariaLabelledby="Contact heading" className="max-w-6xl">
      <h1>Contact Page</h1>
      <Button>Primary</Button>
    </Section>
  );
}

export default Contact;
