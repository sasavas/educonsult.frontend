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
  loadedStudent: false,
  errorStudent: null,
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
  async ({ studentId, programId, pipeline, applicationDate }) => {
    const path = registerStudent(studentId, programId);

    return axios
      .put(path, { pipeline, applicationDate })
      .then((result) => {
        console.log(result);

        if (result.status === 200) {
          return { student: result.data };
        }
      })
      .catch((err) => {
        return { msg: err };
      });
  }
);

export const getStudentById = createAsyncThunk(
  "students/getStudentById",
  async (studentId) => {
    const path = studentById(studentId);

    return axios
      .get(path)
      .then((result) => {
        if (result.status === 200) {
          return { student: result.data };
        }
      })
      .catch((err) => {
        return { msg: err };
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
    [registerStudentToProgram.pending]: (state) => {},
    [registerStudentToProgram.fulfilled]: (state, action) => {
      if (action.payload.student) {
        state.student = action.payload.student;
      } else {
        console.error(action.payload.msg);
      }
    },
    [getStudentById.pending]: (state, action) => {
      state.loadedStudent = false;
    },
    [getStudentById.fulfilled]: (state, action) => {
      if (action.payload.student) {
        state.student = action.payload.student;
        state.errorStudent = null;
        state.loadedStudent = true;
      } else {
        console.error("error message:", action.payload.msg);
      }
    },
  },
});

export const selectStudents = (state) => state.students.value;

export const selectLoaded = (state) => state.students.loaded;

export const selectError = (state) => state.students.error;

export const selectStudent = (state) => state.students.student;

export const selectLoadedStudent = (state) => state.students.loadedStudent;

export const selectErrorStudent = (state) => state.students.errorStudent;

export const { getStudent } = studentsSlice.actions;

export default studentsSlice.reducer;
