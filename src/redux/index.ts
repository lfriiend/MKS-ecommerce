import { combineReducers } from 'redux'
import cartReducer from './cart/Cart.store'
import { configureStore } from '@reduxjs/toolkit';
import { CartState } from './cart/Cart.store'

const rootReducer = combineReducers({
  cart: cartReducer
})

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat()
})

export default store

export interface RootState{
  cart: CartState;
}