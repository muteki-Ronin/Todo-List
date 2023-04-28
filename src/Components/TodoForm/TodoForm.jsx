// CORE
import { useState } from "react";
import { useDispatch } from "react-redux";
// // ACTIONS
import { addTodo } from "../../store/slices/todoSlice";
// STYLE
import "./style.css";

export const TodoForm = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(inputValue));

    setInputValue("");
  };

  return (
    <form className="form" onSubmit={handlerSubmit}>
      <input
        className="form__input"
        type="text"
        placeholder="New todo"
        name="title"
        onChange={handleChange}
        value={inputValue}
      />
      <button className="form__button">Add</button>
    </form>
  );
};
