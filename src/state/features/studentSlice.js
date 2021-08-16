import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { studentsRoute } from "../../constants/network";

const initialState = {
  value: [],
  loaded: false,
  error: null,
};

export const loadStudents = createAsyncThunk(
  "students/fetchStudents",
  async () => {
    return axios
      .get(studentsRoute)
      .then((result) => {
        console.log(result.data);
        return { value: result.data, loaded: true };
      })
      .catch((error) => {
        console.log(error);
      });
  }
);

export const studentsSlice = createSlice({
  name: "students",
  initialState,
  reducers: {},
  extraReducers: {
    [loadStudents.pending]: (state) => {
      state.loaded = false;
    },
    [loadStudents.fulfilled]: (state, action) => {
      if (action.payload) {
        state.value = action.payload.value;
        state.error = null;
        state.loaded = true;
      } else {
        state.error = "Öğrenci listesi yüklenemedi :/";
      }
    },
  },
});

export const selectStudents = (state) => state.students.value;

export const selectLoaded = (state) => state.students.loaded;

export const selectError = (state) => state.students.error;

export default studentsSlice.reducer;
