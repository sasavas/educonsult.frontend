import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  value: [],
  loaded: false,
  error: null,
};

export const loadCourses = createAsyncThunk(
  "courses/fetchCourses",
  async () => {
    return axios
      .get("http://localhost:3008/fields")
      .then((result) => {
        return { value: result.data, loaded: true };
      })
      .catch((error) => {
        console.log(error);
      });
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
        state.error = "Okul listesi yüklenemedi :/";
      }
    },
  },
});

export const selectCourses = (state) => state.courses.value;

export const selectLoaded = (state) => state.courses.loaded;

export const selectError = (state) => state.courses.error;

export default coursesSlice.reducer;
