import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  valueM: 2,
  status: "idle",
};

export const multiplierSlice = createSlice({
  name: "multiplier",
  initialState,
  reducers: {
    multiply: (state) => {
      state.valueM *= 2;
    },
    divide: (state) => {
      if (state.valueM !== 0) {
        state.valueM = state.valueM / 2;
      }
    },
  },
});

export const { multiply, divide } = multiplierSlice.actions;

export const selectResult = (state) => state.muliplying.valueM;

export default multiplierSlice.reducer;
