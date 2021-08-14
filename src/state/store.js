import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "./features/coursesSlice";
import menuSelectorReducer from "./features/menuSelectorSlice";

export const store = configureStore({
  reducer: {
    courses: coursesReducer,
    menuSelector: menuSelectorReducer,
  },
});
