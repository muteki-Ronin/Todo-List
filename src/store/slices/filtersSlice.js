// CORE
import { createSlice } from "@reduxjs/toolkit";
// CONSTS
import { ALL } from "../consts/filtersConsts";

const initialState = JSON.parse(localStorage.getItem("TodoFilter")) || ALL;

const filter = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter(state, action) {
      const newState = action.payload;
      localStorage.setItem("TodoFilter", JSON.stringify(newState));
      return (state = newState);
    },
  },
});

export const { setFilter } = filter.actions;
export default filter.reducer;
