import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; 
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";

import "./index.css";
import Products from "./products";
import Cart from "./cart";
import store from "./store";
import CartMenu from "./cart/views/cartMenu";

ReactDOM.render(
  <React.StrictMode>
      <Router>
    <Provider store={store}>


    <h1>Shopping Cart App</h1>
        <div>
          <span>
          </span>
          <span>
            [ <Link to="/">Products</Link> ]
          </span>
          <span>
            [ <Link to="/cart"><CartMenu/></Link> ]
          </span>
        </div>
        <hr />
        <Switch>
          <Route path="/cart" component={Cart}/>
          <Route exact path="/" component={Products} />
        </Switch>
    </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


