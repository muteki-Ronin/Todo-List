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
import { useStyle } from "./style";
// MUI
import { Checkbox, TextField, IconButton, Paper, Box } from "@mui/material";
// MUI ICONS
import EditIcon from "@mui/icons-material/Edit";
import EditOffIcon from "@mui/icons-material/EditOff";
import DeleteIcon from "@mui/icons-material/Delete";

export const TodoItem = ({ id, title, checked, edit }) => {
  const classes = useStyle();
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
    <Paper elevation={24} className={classes.container}>
      <Checkbox
        size="medium"
        onChange={handlerChecked}
        checked={checked}
        disabled={edit}
        color="error"
        id={id}
      />
      {edit ? (
        <TextField
          type="search"
          label="Edit"
          value={inputValue}
          onChange={inputChange}
          color="warning"
          fullWidth
        />
      ) : (
        <Box
          component="span"
          className={
            checked ? classes.title + " " + classes.checked : classes.title
          }
        >
          <label htmlFor={id}>{title}</label>
        </Box>
      )}

      <IconButton
        aria-label="Edit todo"
        size="large"
        color={edit ? "success" : "warning"}
        onClick={handlerEdit}
        disabled={checked ? true : false}
      >
        {edit ? <EditOffIcon /> : <EditIcon />}
      </IconButton>

      <IconButton
        aria-label="Delete todo"
        size="large"
        color="error"
        onClick={handlerDelete}
      >
        <DeleteIcon />
      </IconButton>
    </Paper>
  );
};
