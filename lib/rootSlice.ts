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
      state.careerHistory = [...state.careerHistory, action.payload];
    },
    deleteCareerHistory: (state, action) => {
      state.careerHistory = state.careerHistory.filter((value) => value.key !== action.payload);
    },
    updateCareerHistory: (state, action) => {
      state.careerHistory = state.careerHistory.map((value) => {
        return (value === action.payload.key ? {
          ...value,
          company: action.payload.values.company,
          location: action.payload.values.location,
          startDate: action.payload.values.startDate,
          endDate: action.payload.values.endDate,
        } : value)
      })
    }
  }
});

export const selectNotifications = (state: RootState) => state.root.notifications;
export const selectProfile = (state: RootState) => state.root.profile;
export const selectCareerHistory = (state: RootState) => state.root.careerHistory;
export const { setNotifications, setProfile, addCareerHistory, deleteCareerHistory, updateCareerHistory } = rootSlice.actions;
export default rootSlice.reducer;