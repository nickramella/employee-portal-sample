import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store/store";

const initialState = { 
  notifications: [],
  profile: {
    firstName: "",
    lastName: "",
    email: ""
  },
};

export const rootSlice = createSlice({
  name: "root",
  initialState,
  reducers: {
    setNotifications: (state, action) => {
        state.notifications = action.payload;
    },
    setProfile: (state, action) => {
        state.profile = action.payload;
    }
  }
});

export const selectNotifications = (state: RootState) => state.root.notifications;
export const selectProfile = (state: RootState) => state.root.profile;
export const { setNotifications, setProfile } = rootSlice.actions;
export default rootSlice.reducer;