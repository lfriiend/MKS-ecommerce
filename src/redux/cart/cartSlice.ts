import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface CartState{
  products: {}
}

const initialState = { 
  products: {
  cartItems: [],
  cartQuantity: 0,
  cartTotalAmount: 0}
} as CartState

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers:{
    addToCart(state, action: PayloadAction<CartState>){
      state.cartItems.push(action.payload)
    }
  }
})