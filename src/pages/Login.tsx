import LoginForm from "../components/Login/LoginForm";

function Login() {
  return (
    <section className="my-8">
      <h1 className="mb-4 text-3xl font-semibold text-center lg:text-5xl">
        Sign In
      </h1>
      <LoginForm />
      <p className="mt-4 text-xs text-center lg:text-sm">
        Your privacy and security are our utmost priorities.
      </p>
    </section>
  );
}

export default Login;
