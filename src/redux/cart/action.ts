import { ADDING_CART, REMOVING_CART } from "./actionTypes";

export const addingCartAction = (products:any)=>({
  type: ADDING_CART,
  payload: products
});

export const removingCartAction = (products:any)=>({
  type: REMOVING_CART,
  payload: products
});