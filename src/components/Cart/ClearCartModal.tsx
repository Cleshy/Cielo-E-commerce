import { type JSX } from "react";
import Modal from "../ui/Modal";
import { useCart } from "../../context/CartProvider";

type ClearCartModalProps = {
  showModal: boolean;
  closeModal: () => void;
};

function ClearCartModal({
  showModal,
  closeModal,
}: ClearCartModalProps): JSX.Element {
  const { clearCart } = useCart();

  const handleClear = () => {
    clearCart();
    closeModal();
  };

  return (
    <Modal showModal={showModal} closeModal={closeModal}>
      <div className="p-6 text-center">
        <h2 className="mb-4 text-xl font-medium">Are you sure?</h2>
        <p className="mb-6 text-sm text-gray-600">
          This will permanently remove all items from your selection.
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={closeModal}
            className="cursor-pointer px-4 py-2 text-sm border border-brand hover:bg-brand-dark hover:border-brand-dark rounded text-white bg-brand transition"
          >
            Back
          </button>
          <button
            onClick={handleClear}
            className="cursor-pointer px-4 py-2 text-sm text-brand rounded border hover:bg-brand hover:text-white transition"
          >
            Clear
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default ClearCartModal;
