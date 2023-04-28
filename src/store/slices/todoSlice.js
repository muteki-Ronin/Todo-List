// CORE
import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

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
      return [...state, newTodo];
    },
    checkedTodo(state, action) {
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, checked: !todo.checked } : todo
      );
    },
    editTodo(state, action) {
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, title: action.payload.title, edit: !todo.edit }
          : todo
      );
    },
    deleteTodo(state, action) {
      return state.filter((todo) => todo.id !== action.payload);
    },
    deleteAllTodo(state) {
      return (state = initialState);
    },
  },
});

export const { addTodo, checkedTodo, editTodo, deleteTodo, deleteAllTodo } =
  todos.actions;
export default todos.reducer;
