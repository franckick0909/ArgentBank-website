import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import App from "./App";


// Redux
// import { Provider } from "react-redux";
// import { configureStore } from "@reduxjs/toolkit";
// import rootReducer from "./reducers";

import store from "./Store";
import { Provider } from "react-redux";
  



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(


  <Provider store={store}>
    <App />
  </Provider>

);
