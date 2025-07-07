import type { JSX } from "react";
import Button from "../ui/Button";
import GoogleLoginButton from "./GoogleLoginButton";

function LoginForm(): JSX.Element {
  return (
    <form className="flex flex-col max-w-sm gap-6 p-5 mx-auto mt-4 bg-white rounded-lg shadow md:mt-8">
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm lg:text-base">
          E-mail
        </label>
        <input
          className="p-2 text-sm text-gray-700 bg-gray-100 rounded lg:p-3 focus:outline-none focus:ring-2 focus:ring-brand"
          type="email"
          id="email"
          name="email"
          placeholder="ex: johndoe@gmail.com"
          autoComplete="off"
          required
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="password" className="text lg:text-base-sm">
          Password
        </label>
        <input
          className="p-2 text-sm text-gray-700 bg-gray-100 rounded lg:p-3 focus:outline-none focus:ring-2 focus:ring-brand"
          type="password"
          id="password"
          name="password"
          autoComplete="off"
          required
        />
        <a href="#" className="text-xs underline">
          Forgot your password?
        </a>
      </div>
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          name="remember"
          id="remember"
          defaultChecked
          className="accent-brand checked:bg-brand checked:border-brand"
        />
        <label htmlFor="remember" className="text lg:text-base-sm">
          Remember me
        </label>
      </div>
      <Button>Sign In</Button>
      {/* itt jöhet a Google login */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 text-gray-500 bg-white">or continue with</span>
        </div>
      </div>
      <GoogleLoginButton />
      <p className="text-sm text-center">
        Don’t have an account?{" "}
        <a href="#" className="font-semibold underline text-brand">
          Register
        </a>
      </p>
    </form>
  );
}

export default LoginForm;
