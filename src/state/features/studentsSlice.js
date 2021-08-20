import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import {
  studentsRoute,
  studentById,
  registerStudent,
} from "../../constants/network";

const initialState = {
  value: [],
  loaded: false,
  error: null,
  student: {},
};

export const loadStudents = createAsyncThunk(
  "students/fetchStudents",
  async () => {
    return axios
      .get(studentsRoute)
      .then((result) => {
        return { value: result.data, loaded: true };
      })
      .catch((error) => {
        console.log(error);
      });
  }
);

export const registerStudentToProgram = createAsyncThunk(
  "students/registerStudentToProgram",
  async ({ studentId, programId }) => {
    const path = registerStudent(studentId, programId);

    return axios
      .put(path)
      .then((result) => {
        if (result.status === 200) {
          return { student: result.data };
        }
      })
      .catch((err) => {
        return { msg: "Already applied to this program", err: err };
      });
  }
);

export const studentsSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    getStudent: (state, action) => {
      state.student = action.payload;
    },
  },
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
    [registerStudentToProgram.pending]: (state) => {},
    [registerStudentToProgram.fulfilled]: (state, action) => {
      if (action.payload.student) {
        state.student = action.payload;
      } else {
        console.log(action.payload.msg);
      }
    },
  },
});

export const selectStudents = (state) => state.students.value;

export const selectStudent = (state) => state.students.student;

export const selectLoaded = (state) => state.students.loaded;

export const selectError = (state) => state.students.error;

export const { getStudent } = studentsSlice.actions;

export default studentsSlice.reducer;
