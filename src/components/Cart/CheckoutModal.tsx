import type { JSX } from "react";
import Modal from "../ui/Modal";

type CartModalProps = {
  showModal: boolean;
  closeModal: () => void;
};

function CartModal({ showModal, closeModal }: CartModalProps): JSX.Element {
  return (
    <Modal closeModal={closeModal} showModal={showModal}>
      <div className="flex flex-col gap-1">
        <h2 id="modal-title" className="font-bold lg:text-2xl">
          A Moment Before We Continue
        </h2>
        <p className="text-sm lg:text-base">
          For your convenience, you may proceed as a guest or sign in to access
          your personal preferences and order history.
        </p>
        <div className="flex flex-col lg:flex-row gap-2 mt-5">
          <button className="flex-1 cursor-pointer px-5 py-2 text-sm text-white bg-brand rounded hover:opacity-90 transition">
            Sign In
          </button>
          <button className="flex-1 cursor-pointer px-5 py-2 text-sm border rounded border-brand text-brand hover:bg-brand hover:text-white transition">
            Continue as Guest
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default CartModal;
