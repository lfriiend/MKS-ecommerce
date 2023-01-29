import { INCREMENT_COUNTER, DESCREMENT_COUNTER } from "./actionTypes";

export const incrementCounterAction = (payload:number)=>({
  type: INCREMENT_COUNTER,
  payload
});
