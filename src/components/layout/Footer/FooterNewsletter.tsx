import type { JSX } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z.string().email(),
});

type SubscriptionFields = z.infer<typeof schema>;

function FooterNewsletter(): JSX.Element {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<SubscriptionFields>({ resolver: zodResolver(schema) });

  const onSubmit: SubmitHandler<SubscriptionFields> = async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
    } catch (error) {
      setError("root", {
        message: "This e-mail is already subscribed.",
      });
    }
  };

  return (
    <div className="flex flex-col gap-1 lg:flex-1">
      <h2 className="text-xl font-semibold">Stay informed</h2>
      <p className="text-sm font-light">
        Receive updates, curated collections and exclusive offers.
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-2 mt-2"
      >
        {errors.email && (
          <span className="font-semibold text-red-500 bg-white py-1 px-2 rounded">
            {errors.email.message}
          </span>
        )}
        <div className="flex gap-3">
          <input
            {...register("email")}
            name="email"
            id="email"
            className="flex-2 bg-white w-full rounded focus:outline-none py-2 px-2 text-gray-700 text-sm"
            type="text"
            placeholder="Your e-mail address"
          />
          <button className="flex-1 bg-brand hover:bg-brand-dark transition cursor-pointer rounded text-sm font-medium">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default FooterNewsletter;
