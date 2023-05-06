import { createUseStyles } from "react-jss";

export const useStyle = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: "80px",
    padding: "10px",
    border: "2px solid rgba(3, 115, 7, 0.6)",
    backgroundColor: "rgba(235, 238, 231, 0.4)",
  },
  title: {
    flexGrow: 1,
  },
  checked: {
    textDecoration: "line-through",
    color: "rgb(227, 30, 30)",
  },
});
