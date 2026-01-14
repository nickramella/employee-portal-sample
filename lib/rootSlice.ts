import { createSlice } from "@reduxjs/toolkit";
// import { AppStore, RootState } from "./store/store";


const initialState = { 
  notifications: [],
};

export const rootSlice = createSlice({
  name: "root",
  initialState,
  reducers: {
    setNotifications: (state, action) => {
      state.notifications = action.payload.notifications;
    },
  }
});

export const { setNotifications } = rootSlice.actions;
export default rootSlice.reducer;