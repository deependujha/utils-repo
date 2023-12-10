import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import contraReducer from "./slices/contradictory";

export default configureStore({
  reducer: {
    counter: counterReducer,
    alpha: contraReducer
  },
});
