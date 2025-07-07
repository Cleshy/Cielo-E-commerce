import type { JSX } from "react";

type CartItemContainerProps = {
  children: React.ReactNode;
};

function CartItemContainer({ children }: CartItemContainerProps): JSX.Element {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">{children}</div>
  );
}

export default CartItemContainer;
