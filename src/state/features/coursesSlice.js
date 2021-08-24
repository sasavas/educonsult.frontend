import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { coursesRoute, courseById } from "../../constants/network";

const initialState = {
  value: [],
  loaded: false,
  error: null,
  course: {},
  loadedCourse: false,
  errorCourse: null,
};

export const loadCourses = createAsyncThunk(
  "courses/fetchCourses",
  async () => {
    return axios
      .get(coursesRoute)
      .then((result) => {
        return { value: result.data, loaded: true };
      })
      .catch((error) => {
        console.log(error);
      });
  }
);

export const getCourseById = createAsyncThunk(
  "courses/getCourseById",
  async (id) => {
    return axios
      .get(courseById(id))
      .then((result) => {
        return { course: result.data };
      })
      .catch((err) => console.log(err));
  }
);

export const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {},
  extraReducers: {
    [loadCourses.pending]: (state) => {
      state.loaded = false;
    },
    [loadCourses.fulfilled]: (state, action) => {
      if (action.payload) {
        state.value = action.payload.value;
        state.error = null;
        state.loaded = true;
      } else {
        state.error = "Program listesi yüklenemedi :/";
      }
    },
    [getCourseById.pending]: (state) => {
      state.loadedCourse = false;
    },
    [getCourseById.fulfilled]: (state, action) => {
      if (action.payload.course) {
        state.course = action.payload.course;
        state.errorCourse = null;
        state.loadedCourse = true;
      }
    },
  },
});

export const selectCourses = (state) => state.courses.value;

export const selectLoaded = (state) => state.courses.loaded;

export const selectError = (state) => state.courses.error;

export const selectCourse = (state) => state.courses.course;

export const selectLoadedCourse = (state) => state.courses.loadedCourse;

export const selectErrorCourse = (state) => state.courses.errorCourse;

export default coursesSlice.reducer;
