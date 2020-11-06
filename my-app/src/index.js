import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import axios from 'axios'

import Products from "./products";
import Categories from "./categories";

import store from "./store";
window['store']=store;

window['axios']=axios;
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Categories />
      <Products />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


