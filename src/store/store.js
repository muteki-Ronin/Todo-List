// CORE
import { configureStore } from "@reduxjs/toolkit";
// SLICES
import todos from "./slices/todoSlice";
import filter from "./slices/filtersSlice";

export const store = configureStore({
  reducer: {
    todos,
    filter,
  },
});
