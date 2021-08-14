import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  value: [],
  loaded: false,
};

export const loadCourses = createAsyncThunk(
  "courses/fetchCourses",
  async () => {
    const result = await axios.get("http://localhost:3008/fields");
    return { value: result.data, loaded: true };
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
      console.log("fulfilled", action.payload);
      state.loaded = true;
      state.value = action.payload.value;
    },
  },
});

export const selectCourses = (state) => state.courses.value;

export const selectLoaded = (state) => state.courses.loaded;

export default coursesSlice.reducer;
