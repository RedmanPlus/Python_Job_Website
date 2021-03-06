import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {BaseURL} from "../../constants/api";

export const fetchVacansies = createAsyncThunk(
  "vacansies/fetchVacansies",
  async ({
    sortLevel,
    sortMode,
    sortRemote,
    sortSalary,
    currentPage,
    sortTechnologies,
    sortRelocation,
      sortSearch
  }) => {
    const { data } = await axios(
      `${BaseURL}vacancy/?limit=20&page=${currentPage}${sortSearch}${sortLevel}${sortMode}${sortRemote}${sortSalary}${sortRelocation}${sortTechnologies}`
    );
    return data;
  }
);
export const vacansiesCounter = createAsyncThunk(
  "vacansies/vacansiesCounter",
  async () => {
    const { data } = await axios(BaseURL + `vacancy/`);
    return data.count;
  }
);

const initialState = {
  vacansies: [],
  isLoading: true,
  counter: "",
  page_count: 0,
};

export const vacansiesSlice = createSlice({
  name: "vacansies",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchVacansies.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchVacansies.fulfilled]: (state, actions) => {
      state.isLoading = false;
      state.vacansies = actions.payload.results;
      state.page_count = actions.payload.page_count;
      state.counter = actions.payload.count;
    },
    [fetchVacansies.rejected]: (state) => {
      state.isLoading = true;
      console.log("error");
    },

    [vacansiesCounter.pending]: (state) => {},
    [vacansiesCounter.fulfilled]: (state, actions) => {
      state.counter = actions.payload;
    },
    [vacansiesCounter.rejected]: (state) => {
      state.counter = 0;
    },
  },
});

export const {} = vacansiesSlice.actions;

export default vacansiesSlice.reducer;
