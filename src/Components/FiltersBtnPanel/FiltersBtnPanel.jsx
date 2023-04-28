// CORE
import { useDispatch, useSelector } from "react-redux";
// ACTIONS
import { setFilter } from "../../store/slices/filtersSlice";
// SELECTORS
import { selectFilters } from "../../store/selectors/selectFilters";
// CONSTS
import { ALL, ACTIVE, COMPLETED } from "../../store/consts/filtersConsts";
// STYLE
import "./style.css";

export const FiltersBtnPanel = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilters);

  return (
    <div className="filter-btn_panel">
      <button
        className={filter === ALL ? "active-btn" : ""}
        onClick={() => dispatch(setFilter("ALL"))}
      >
        All todos
      </button>
      <button
        className={filter === ACTIVE ? "active-btn" : ""}
        onClick={() => dispatch(setFilter("ACTIVE"))}
      >
        Active todos
      </button>
      <button
        className={filter === COMPLETED ? "active-btn" : ""}
        onClick={() => dispatch(setFilter("COMPLETED"))}
      >
        Completed todos
      </button>
    </div>
  );
};
