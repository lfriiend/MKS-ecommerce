import { INCREMENT_COUNTER, DESCREMENT_COUNTER } from "./actionTypes";

const initState ={
  count: 0
}

export const counterReducer = (state = initState, { type, payload }: {type: any; payload: any}) => {
  const count = state.count;
  
  switch(type) {
    case INCREMENT_COUNTER:
      return{
        ...state,
        count: count + payload
      };

    default:
      return state;
  }
}