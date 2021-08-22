import { configureStore } from "@reduxjs/toolkit";
import menuSelectorReducer from "./features/menuSelectorSlice";
import coursesReducer from "./features/coursesSlice";
import studentsReducer from "./features/studentsSlice";
import pipelinesReducer from "./features/pipelineSlice";

export const store = configureStore({
  reducer: {
    menuSelector: menuSelectorReducer,
    courses: coursesReducer,
    students: studentsReducer,
    pipelines: pipelinesReducer,
  },
});
