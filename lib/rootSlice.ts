import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store/store";
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

export const selectNotifications = (state: RootState) => state.root.notifications;
export const { setNotifications } = rootSlice.actions;
export default rootSlice.reducer;