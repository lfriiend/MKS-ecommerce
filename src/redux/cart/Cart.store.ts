import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Product {
  id: string;
  price: number;
  quantity: number
}

export interface CartState {
cart: { id: number; quantity: number; price: number }[];
cartTotalQuantity: number;
subtotal: number;
products: Product[];
}

const initialState: CartState = {
  cart: [],
  cartTotalQuantity: 0,
  subtotal: 0,
  products: []
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {

    addToCart: (state, action: PayloadAction<{id:number} & Product>) => {
        const itemInCart = state.cart.find((item) => item.id === action.payload.id);
        if (itemInCart) {
          itemInCart.quantity++;
          state.cartTotalQuantity++;
        } else {
          state.cart.push({ ...action.payload, quantity: 1 });
          state.cartTotalQuantity++;
        }
      },

    incrementQuantity: (state, action: PayloadAction<{ id: number} >) => {
      const itemIndex = state.cart.find((item) => item.id === action.payload.id);
      if (itemIndex) {
        itemIndex.quantity++;
        state.cartTotalQuantity++;
      }
    },
    decrementQuantity: (state, action: PayloadAction<{ id: number}>) => {
      const itemIndex = state.cart.find((item) => item.id === action.payload.id);
      if (itemIndex) {
        if (itemIndex.quantity === 1) {
          itemIndex.quantity = 1;
        } else {
          itemIndex.quantity--;
          state.cartTotalQuantity--;
        }
      }
    },
    removeItem: (state, action: PayloadAction<{ id: number }>) => {
      const itemIndex = state.cart.findIndex((item) => item.id === action.payload.id);
      if (itemIndex >= 0) {
    state.cartTotalQuantity -= state.cart[itemIndex].quantity;
    state.cart.splice(itemIndex, 1);
    
      }
    },

    calculateSubtotal: state => {
      state.subtotal = 0;
      state.cart.forEach(item => {
        state.subtotal += item.price * item.quantity;
      });

}}});

export const cartReducer = cartSlice.reducer;
export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
  calculateSubtotal
} = cartSlice.actions;

export default cartSlice.reducer