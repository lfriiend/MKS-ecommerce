// import { configureStore } from "@reduxjs/toolkit";
// import { connect } from "http2";

// export const store = configureStore({
//   reducer: {},
// });

// export type RootState = ReturnType<typeof store.getState>;

// export type AppDispatch = typeof store.dispatch;

import { createStore, applyMiddleware } from "redux"
import { cartReducer } from "./cart/reducer";
import { counterReducer } from "./counter/reducer"
import { composeWithDevTools } from 'redux-devtools-extension'
import reduxThunk from 'redux-thunk'


export const store = createStore(counterReducer, composeWithDevTools() );
