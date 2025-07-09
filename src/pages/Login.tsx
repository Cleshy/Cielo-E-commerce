import LoginForm from "../components/Login/LoginForm";
import type { JSX } from "react";
import Section from "../components/ui/Section";

function Login(): JSX.Element {
  return (
    <Section ariaLabelledby="Sign In heading">
      <h1
        id="signin-heading"
        className="mb-4 text-3xl font-semibold text-center lg:text-5xl"
      >
        Sign In
      </h1>
      <LoginForm />
      <p className="mt-4 text-xs text-center lg:text-sm">
        Your privacy and security are our utmost priorities.
      </p>
    </Section>
  );
}

export default Login;
