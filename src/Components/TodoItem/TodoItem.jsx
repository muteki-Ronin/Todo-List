// CORE
import { useState } from "react";
import { useDispatch } from "react-redux";
// ACTIONS
import {
  checkedTodo,
  editTodo,
  deleteTodo,
} from "../../store/slices/todoSlice";
// STYLE
import "./style.css";

export const TodoItem = ({ id, title, checked, edit }) => {
  const [inputValue, setInputValue] = useState(title);
  const dispatch = useDispatch();

  const handlerChecked = () => {
    dispatch(checkedTodo(id));
  };

  const inputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handlerEdit = () => {
    dispatch(editTodo({ id: id, title: inputValue }));
  };

  const handlerDelete = () => {
    dispatch(deleteTodo(id));
  };

  return (
    <li className="todo-item">
      <label className="todo-item__label">
        <input
          type="checkbox"
          onChange={handlerChecked}
          defaultChecked={checked}
        />
        {edit ? (
          <input
            className="edit-input"
            type="text"
            value={inputValue}
            onChange={inputChange}
          />
        ) : (
          <p
            className={
              checked
                ? "todo-item__desc todo-item__desc--checked"
                : "todo-item__desc"
            }
          >
            {title}
          </p>
        )}
      </label>
      <button className="edit_btn" onClick={handlerEdit}>
        {edit ? "Save" : "Edit"}
      </button>
      <button className="del_btn" onClick={handlerDelete}>
        Delete
      </button>
    </li>
  );
};
