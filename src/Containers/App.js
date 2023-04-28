// COMPONENTS
import { TodoForm } from "../Components/TodoForm/TodoForm";
import { FiltersBtnPanel } from "../Components/FiltersBtnPanel/FiltersBtnPanel";
import { TodoList } from "../Components/TodoList/TodoList";
// STYLE
import "./style.css";

export const App = () => {
  return (
    <div className="container">
      <h1>TODO LIST</h1>
      <TodoForm />
      <FiltersBtnPanel />
      <h2>Todos:</h2>
      <TodoList />
    </div>
  );
};

export default App;
