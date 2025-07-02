import type { JSX } from "react";
import { BeatLoader } from "react-spinners";

function Loader(): JSX.Element {
  return (
    <div className="flex flex-col items-center gap-4">
      <h2>Preparing the collection...</h2>
      <BeatLoader color="#b8860b" size="20" speedMultiplier={0.5} />
    </div>
  );
}

export default Loader;
