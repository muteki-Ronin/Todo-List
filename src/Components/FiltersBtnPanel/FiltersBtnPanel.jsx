// CORE
import { useDispatch, useSelector } from "react-redux";
// ACTIONS
import { setFilter } from "../../store/slices/filtersSlice";
// SELECTORS
import { selectAllTodos } from "../../store/selectors/selectTodos";
import { selectTodos } from "../../store/selectors/selectTodos";
import { selectFilters } from "../../store/selectors/selectFilters";
// CONSTS
import { ALL, ACTIVE, COMPLETED } from "../../store/consts/filtersConsts";
// STYLE
import { useStyle } from "./style";
// MUI
import { Box, ButtonGroup, Button } from "@mui/material";

export const FiltersBtnPanel = () => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const filter = useSelector(selectFilters);
  const allTodos = useSelector(selectAllTodos).length;
  const activeTodos = useSelector((store) => selectTodos(store, ACTIVE).length);
  const completedTodos = useSelector(
    (store) => selectTodos(store, COMPLETED).length
  );

  return (
    <Box component="div" className={classes.container}>
      <ButtonGroup size="large" variant="contained">
        <Button
          onClick={() => dispatch(setFilter("ALL"))}
          color={filter === ALL ? "error" : "primary"}
        >
          All todos - {allTodos}
        </Button>
        <Button
          onClick={() => dispatch(setFilter("ACTIVE"))}
          color={filter === ACTIVE ? "error" : "primary"}
        >
          Active todos - {activeTodos}
        </Button>
        <Button
          onClick={() => dispatch(setFilter("COMPLETED"))}
          color={filter === COMPLETED ? "error" : "primary"}
        >
          Completed todos - {completedTodos}
        </Button>
      </ButtonGroup>
    </Box>
  );
};
