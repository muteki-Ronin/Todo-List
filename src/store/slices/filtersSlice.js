// CORE
import { createSlice } from "@reduxjs/toolkit";
// CONSTS
import { ALL } from "../consts/filtersConsts";

const initialState = ALL;

const filter = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter(state, action) {
      return (state = action.payload);
    },
  },
});

export const { setFilter } = filter.actions;
export default filter.reducer;
