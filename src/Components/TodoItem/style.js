import { createUseStyles } from "react-jss";

export const useStyle = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: "80px",
    padding: "10px",
    border: "2px solid green",
    backgroundColor: "rgba(223, 224, 213, 0.5)",
  },
  title: {
    flexGrow: 1,
  },
  checked: {
    textDecoration: "line-through",
    color: "rgb(227, 30, 30)",
  },
});
