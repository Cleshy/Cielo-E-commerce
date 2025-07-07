import type { JSX } from "react";
import Button from "../ui/Button";
import GoogleLoginButton from "./GoogleLoginButton";
import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Zod validation
const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

type FormFields = z.infer<typeof schema>;

// React hook form validation types
// type FormFields = {
//   email: string;
//   password: string;
// };

function LoginForm(): JSX.Element {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormFields> = async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      reset();
    } catch (error) {
      setError("root", {
        message: "This e-mail is already taken",
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col max-w-sm gap-6 p-5 mx-auto mt-4 bg-white rounded-lg shadow md:mt-8"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm lg:text-base">
          E-mail
        </label>
        <input
          // Zod
          {...register("email")}
          //   // For registration form
          // {...register("email", {
          //   // required: "E-mail is required",
          //   // pattern: {
          //   //   value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          //   //   message: "E-mail is not valid",
          //   // },
          // })}
          className="p-2 text-sm text-gray-700 bg-gray-100 rounded lg:p-3 focus:outline-none focus:ring-2 focus:ring-brand"
          type="email"
          id="email"
          name="email"
          placeholder="ex: johndoe@gmail.com"
          autoComplete="off"
        />
        {errors.email && (
          <span className="text-sm text-red-500">{errors.email.message}</span>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="password" className="text lg:text-base-sm">
          Password
        </label>
        <input
          // Zod
          {...register("password")}
          //   // For registration form
          // {...register("password", {
          //   required: "Password is required",
          //   // pattern: {
          //   //   value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
          //   //   message:
          //   //     "Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character.",
          //   // },
          // })}
          className="p-2 text-sm text-gray-700 bg-gray-100 rounded lg:p-3 focus:outline-none focus:ring-2 focus:ring-brand"
          type="password"
          id="password"
          name="password"
          autoComplete="off"
        />
        {errors.password && (
          <span className="text-sm text-red-500">
            {errors.password.message}
          </span>
        )}
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
      <Button disabled={isSubmitting} type="submit">
        {isSubmitting ? "Loading..." : "Submit"}
      </Button>
      {errors.root && (
        <span className="text-sm text-red-500">{errors.root.message}</span>
      )}
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
