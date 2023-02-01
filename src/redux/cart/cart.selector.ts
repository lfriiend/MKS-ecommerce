import { createSelector } from 'reselect'
import { CartState } from './Cart.store'

export const selectCart = (state: CartState) => state.cart;

export const selectCartTotal = createSelector(
  selectCart,
  cart =>
    cart.reduce((total) => total + parseFloat(cart.price) * cart.quantity, 0)
);
