import { useEffect, type JSX, type ReactNode } from "react";

type ModalProps = {
  children: ReactNode;
  showModal: boolean;
};

function Modal({ children, showModal }: ModalProps): JSX.Element | null {
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  if (!showModal) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 w-full ${
        showModal ? "h-full p-5 border-t-2" : "h-0"
      } bg-white border-brand/50 transition-all duration-400 ease-in-out z-50`}
    >
      {children}
    </div>
  );
}

export default Modal;
