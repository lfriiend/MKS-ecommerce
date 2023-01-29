import { ADDING_CART, REMOVING_CART } from "./actionTypes";

const initState ={
  products: [{
    id: 1,
    name: "Dipesh"

  }],
  cartTotalQuantity: 0,
  cartTotalAmount: 0
}

export const cartReducer = (state = initState, { type, payload }: {type: any; payload: any}) => {
  const products = state.products;
  
  switch(type) {
    case ADDING_CART:
      return{
        state
      };

    default:
      return state;
  }
}