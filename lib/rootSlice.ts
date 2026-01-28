import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store/store";

const initialState = { 
  notifications: [],
  profile: {
    firstName: "",
    lastName: "",
    email: ""
  },
  homeAddress: {
    country: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zip: "",
  },
  careerHistory: [
    {
      company: "",
      location: "",
      salary: undefined,
      description: "",
      key: "0",
      new: true,
    }
  ],
  stateTaxes: [
    {
      state: "",
      deductions: undefined,
      key: "0",
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
    setHomeAddress: (state, action) => {
      state.homeAddress = action.payload;
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
          salary: action.payload.values.salary,
          description: action.payload.values.description,
        } : value)
      })
    },
    addStateTaxInfo: (state, action) => {
      state.stateTaxes = [...state.stateTaxes, action.payload];
    },
    deleteStateTaxInfo: (state, action) => {
      state.stateTaxes = state.stateTaxes.filter((value) => value.key !== action.payload);
    },
    updateStateTaxInfo: (state, action) => {
      state.stateTaxes = state.stateTaxes.map((value) => {
        return (value === action.payload.key ? {
          ...value,
          state: action.payload.values.state,
          deductions: action.payload.values.deductions,
        } : value)
      })
    },
  }
});

export const selectNotifications = (state: RootState) => state.root.notifications;
export const selectProfile = (state: RootState) => state.root.profile;
export const selectHomeAddress = (state: RootState) => state.root.homeAddress;
export const selectCareerHistory = (state: RootState) => state.root.careerHistory;
export const selectStateTaxInfo = (state: RootState) => state.root.stateTaxes;
export const { setNotifications, setProfile, setHomeAddress, addCareerHistory, deleteCareerHistory, updateCareerHistory, addStateTaxInfo, deleteStateTaxInfo, updateStateTaxInfo } = rootSlice.actions;
export default rootSlice.reducer;