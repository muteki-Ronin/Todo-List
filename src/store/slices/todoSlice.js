// CORE
import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("TODO")) || [];

const todos = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action) {
      const newTodo = {
        id: crypto.randomUUID(),
        title: action.payload,
        checked: false,
        edit: false,
      };
      localStorage.setItem("TODO", JSON.stringify([...state, newTodo]));
      return [...state, newTodo];
    },
    checkedTodo(state, action) {
      const newState = state.map((todo) =>
        todo.id === action.payload ? { ...todo, checked: !todo.checked } : todo
      );
      localStorage.setItem("TODO", JSON.stringify(newState));
      return newState;
    },
    editTodo(state, action) {
      const newState = state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, title: action.payload.title, edit: !todo.edit }
          : todo
      );
      localStorage.setItem("TODO", JSON.stringify(newState));
      return newState;
    },
    deleteTodo(state, action) {
      const newState = state.filter((todo) => todo.id !== action.payload);
      localStorage.setItem("TODO", JSON.stringify(newState));
      return newState;
    },
    deleteAllTodo(state) {
      const newState = [];
      localStorage.setItem("TODO", JSON.stringify(newState));
      return (state = newState);
    },
  },
});

export const { addTodo, checkedTodo, editTodo, deleteTodo, deleteAllTodo } =
  todos.actions;
export default todos.reducer;
