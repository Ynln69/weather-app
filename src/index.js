import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./components/App/App";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import data from "./redux/store";

const { store, persistor } = data;

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
