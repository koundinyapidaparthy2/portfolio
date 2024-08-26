import React from "react";
import App from "./App";
import store from "./store/store";
import { render } from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/styles";
import { theme } from "./theme";
import "./index.css";
import { initAppAction } from "./actions";
store.dispatch(initAppAction.pending());
render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
