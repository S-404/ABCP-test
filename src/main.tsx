import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App.tsx";
import { Provider } from "react-redux";
import { appStore } from "./store/appStore.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={appStore}>
      <App/>
    </Provider>
  </React.StrictMode>,
);
