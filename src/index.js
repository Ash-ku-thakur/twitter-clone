import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

let Main = () => {
  let persistor = persistStore(store);
  return (
    <div>
      <Provider store={store}>
        <PersistGate loadin={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </div>
  );
};

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
