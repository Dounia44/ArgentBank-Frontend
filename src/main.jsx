import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import "./styles/main.scss";
import App from "./App.jsx";
import { store } from "./store/store.js";
import AppInit from "./components/AppInit/AppInit.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <AppInit>
        <App />
      </AppInit>
    </Provider>
  </StrictMode>
);
