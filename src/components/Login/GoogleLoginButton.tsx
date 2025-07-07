import type { JSX } from "react";

function GoogleLoginButton(): JSX.Element {
  return (
    <button
      type="button"
      className="flex items-center justify-center w-full gap-2 py-2 text-sm transition border rounded cursor-pointer hover:bg-gray-100"
    >
      <img src="/google.svg" alt="Google" className="w-6 h-6" />
    </button>
  );
}

export default GoogleLoginButton;
