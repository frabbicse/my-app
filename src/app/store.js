import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import muliplyReducer from "../features/calculator/multiplierSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    muliplying: muliplyReducer,
  },
});
