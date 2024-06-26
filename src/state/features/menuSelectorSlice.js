import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeItem: "/",
  activeSubItem: "",
};

export const menuSelectorSlicer = createSlice({
  name: "menuSelector",
  initialState,
  reducers: {
    changeActiveLink: (state, action) => {
      state.activeItem = action.payload;
      state.activeSubItem = "";
    },
    changeActiveSubLink: (state, action) => {
      state.activeSubItem = action.payload;
    },
  },
});

export const selectActiveItem = (state) => state.menuSelector.activeItem;
export const selectActiveSubItem = (state) => state.menuSelector.activeSubItem;

export const { changeActiveLink, changeActiveSubLink } =
  menuSelectorSlicer.actions;

export default menuSelectorSlicer.reducer;
