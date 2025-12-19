import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import "./styles/main.scss";
import App from "./App.jsx";
import { store } from "./store/store.js";
import { setToken } from "./store/auth.slice.js";

const token = localStorage.getItem("token");
if (token) store.dispatch(setToken(token));

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
