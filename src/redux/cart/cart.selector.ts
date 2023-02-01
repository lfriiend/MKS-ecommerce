import { createSelector } from "reselect";


interface CartItem {
  quantity: number;
  price: string;
}

interface CartState {
  cart: {
    cart: CartItem[];
  },
}

export const selectCart = (state: CartState) => state.cart;

export const selectCartTotal = createSelector(selectCart, (cart) =>
  cart.cart.reduce(
    (
      accumulatedQuantity: number,
      cartItem: { quantity: number; price: string }
    ) => accumulatedQuantity + cartItem.quantity * parseFloat(cartItem.price),
    0
  )
);
