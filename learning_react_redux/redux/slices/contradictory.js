import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "error",
  initialState: {
    value: 10,
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    
  },
});

// Action creators are generated for each case reducer function
export const { increment } = counterSlice.actions;

// this reducer will be passed in store's 'reducer' key
export default counterSlice.reducer;
