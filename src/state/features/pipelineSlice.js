import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { pipelinesRoute } from "../../constants/network";

const initialState = {
  value: [],
  loaded: false,
  error: null,
};

export const loadPipelines = createAsyncThunk(
  "pipelines/getPipelines",
  async () => {
    return axios
      .get(pipelinesRoute)
      .then((result) => {
        console.log("pipelines", result.data);
        return { value: result.data, loaded: true };
      })
      .catch((error) => {
        console.log(error);
      });
  }
);

export const pipelinesSlice = createSlice({
  name: "pipelines",
  initialState,
  reducers: {},
  extraReducers: {
    [loadPipelines.pending]: (state) => {
      state.loaded = false;
    },
    [loadPipelines.fulfilled]: (state, action) => {
      if (action.payload) {
        state.value = action.payload.value;
        state.error = null;
        state.loaded = true;
      } else {
        state.error = "Pipeline listesi yüklenemedi :/";
      }
    },
  },
});

export const selectPipelines = (state) => state.pipelines.value;

export const selectLoaded = (state) => state.pipelines.loaded;

export const selectError = (state) => state.pipelines.error;

export default pipelinesSlice.reducer;
