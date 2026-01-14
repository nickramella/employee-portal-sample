import { configureStore } from '@reduxjs/toolkit';
import rootReducer from "../rootSlice";
// Import your reducers here (e.g., counterReducer)

export const makeStore = () => {
  return configureStore({
    reducer: {
      root: rootReducer,
    },
  });
};