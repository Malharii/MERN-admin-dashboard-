import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "./state";
import { Provider } from "react-redux";

const store = configureStore({
  reducer: {
    global: globalReducer,
  },
});
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
