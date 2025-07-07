import type { JSX } from "react";
import type { CartItemType } from "../../types/types";
import CartItem from "./CartItem";
import CartItemContainer from "./CartItemContainer";

type CartItemListProps = {
  items: CartItemType[];
};

function CartItemList({ items }: CartItemListProps): JSX.Element {
  return (
    <CartItemContainer>
      {items.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
    </CartItemContainer>
  );
}

export default CartItemList;
