import { createStore } from "redux";

let CounterReducer = (state = { value: 100, name: "saif redux" }, action) => {
  if (action.type === "ADD") {
    return { ...state, value: state.value + action.payload };
  }
  if (action.type === "SUB") {
    return { ...state, value: state.value - action.payload };
  }
  return state;
};
let store = createStore(CounterReducer);

export default store;
