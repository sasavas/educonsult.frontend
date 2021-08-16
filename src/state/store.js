import { configureStore } from "@reduxjs/toolkit";
import menuSelectorReducer from "./features/menuSelectorSlice";
import coursesReducer from "./features/coursesSlice";
import studentReducer from "./features/studentSlice";

export const store = configureStore({
  reducer: {
    menuSelector: menuSelectorReducer,
    courses: coursesReducer,
    students: studentReducer,
  },
});
