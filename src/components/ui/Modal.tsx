import {
  type ReactNode,
  useEffect,
  useRef,
  type JSX,
  type KeyboardEvent,
} from "react";

type ModalProps = {
  children: ReactNode;
  showModal: boolean;
  closeModal: () => void;
};

function Modal({
  children,
  showModal,
  closeModal,
}: ModalProps): JSX.Element | null {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent | KeyboardEventInit) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    if (showModal) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [showModal, closeModal]);

  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === overlayRef.current) {
      closeModal();
    }
  };

  if (!showModal) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      ref={overlayRef}
      onClick={handleClickOutside}
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center px-4"
    >
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full relative animate-fade-in">
        <button
          onClick={closeModal}
          aria-label="Close modal"
          className="absolute top-1 right-3 text-gray-500 hover:text-gray-800 transition text-3xl cursor-pointer"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
