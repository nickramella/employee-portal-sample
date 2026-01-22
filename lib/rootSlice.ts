import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store/store";

const initialState = { 
  notifications: [],
  profile: {
    firstName: "",
    lastName: "",
    email: ""
  },
  careerHistory: [
    {
      company: "",
      location: "",
      startDate: "",
      endDate: "",
      key: "0",
      new: true,
    }
  ],
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
    },
    addCareerHistory: (state, action) => {
        state.careerHistory = [...state.careerHistory, action.payload]
    }
  }
});

export const selectNotifications = (state: RootState) => state.root.notifications;
export const selectProfile = (state: RootState) => state.root.profile;
export const selectCareerHistory = (state: RootState) => state.root.careerHistory;
export const { setNotifications, setProfile, addCareerHistory } = rootSlice.actions;
export default rootSlice.reducer;