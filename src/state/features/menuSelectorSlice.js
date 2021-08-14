import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeItem: "/",
};

export const menuSelectorSlicer = createSlice({
  name: "menuSelector",
  initialState,
  reducers: {
    changeActiveLink: (state, action) => {
      console.log("state", state);
      console.log("action.payload", action.payload);

      state.activeItem = action.payload;
    },
  },
});

export const selectActiveItem = (state) => state.menuSelector.activeItem;

export const { changeActiveLink } = menuSelectorSlicer.actions;

export default menuSelectorSlicer.reducer;
