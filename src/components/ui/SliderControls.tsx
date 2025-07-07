import type { JSX } from "react";

type SliderControlsProps = {
  onPrev: () => void;
  onNext: () => void;
};

function SliderControls({ onPrev, onNext }: SliderControlsProps): JSX.Element {
  return (
    <div className="flex justify-center gap-4 mb-4">
      <button
        className="px-4 py-1 text-2xl text-white rounded cursor-pointer bg-brand hover:bg-brand-dark"
        onClick={onPrev}
        aria-label="Previous slide"
      >
        ‹
      </button>
      <button
        className="px-4 py-1 text-2xl text-white rounded cursor-pointer bg-brand hover:bg-brand-dark"
        onClick={onNext}
        aria-label="Next slide"
      >
        ›
      </button>
    </div>
  );
}

export default SliderControls;
