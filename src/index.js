import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./Containers/App";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { SnackbarProvider } from "notistack";

const root = ReactDOM.createRoot(document.getElementById("react-root"));
root.render(
  <Provider store={store}>
    <SnackbarProvider maxSnack={5} autoHideDuration={3000}>
      <App />
    </SnackbarProvider>
  </Provider>
);
