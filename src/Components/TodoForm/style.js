import { createUseStyles } from "react-jss";

export const useStyle = createUseStyles({
  form: {
    padding: "10px",
    border: "2px solid rgba(3, 115, 7, 0.6)",
    borderRadius: "5px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "5px",
    background: "rgba(235, 238, 231, 0.5)",
  },
  input: {
    background: "rgba(106, 186, 66, 0.2)",
  },
  button: {
    height: "55px",
  },
});
