// CORE
import { useSelector, useDispatch } from "react-redux";
// COMPONENTS
import { TodoItem } from "../TodoItem/TodoItem";
// ACTIONS
import { deleteAllTodo } from "../../store/slices/todoSlice";
// SELECTORS
import { selectFilters } from "../../store/selectors/selectFilters";
import { selectTodos } from "../../store/selectors/selectTodos";
// STYLE
import "./style.css";

export const TodoList = () => {
  const filter = useSelector(selectFilters);
  const todos = useSelector((state) => selectTodos(state, filter));
  const dispatch = useDispatch();

  const handleDeleteAll = () => {
    dispatch(deleteAllTodo());
  };

  return (
    <>
      <ul>
        {todos.map((todoItem) => (
          <TodoItem
            key={todoItem.id}
            id={todoItem.id}
            title={todoItem.title}
            checked={todoItem.checked}
            edit={todoItem.edit}
          />
        ))}
      </ul>
      {todos.length > 1 ? (
        <button className="del-all_btn" onClick={handleDeleteAll}>
          DELETE ALL
        </button>
      ) : null}
    </>
  );
};
