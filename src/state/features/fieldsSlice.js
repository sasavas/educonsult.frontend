import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  value: [],
  loaded: false,
};

export const loadFields = createAsyncThunk("fields/fetchFields", async () => {
  const result = await axios.get("http://localhost:3008/fields");
  return { value: result.data, loaded: true };
});

export const fieldsSlice = createSlice({
  name: "fields",
  initialState,
  reducers: {},
  extraReducers: {
    [loadFields.pending]: (state) => {
      state.loaded = false;
    },
    [loadFields.fulfilled]: (state, action) => {
      console.log("fulfilled", action.payload);
      state.loaded = true;
      state.value = action.payload.value;
    },
  },
});

export const selectFields = (state) => state.fields.value;

export const selectLoaded = (state) => state.fields.loaded;

export default fieldsSlice.reducer;
