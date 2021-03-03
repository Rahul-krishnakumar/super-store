import React from "react";

import { Switch, Route, Redirect } from "react-router-dom";

import Home from "./Pages/Home";
import Deals from "./Pages/Deals";
import Cart from "./Pages/Cart";
import Product from "./Pages/Product";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/deals">
          <Deals />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route exact path="/item/:id">
          <Product />
        </Route>
        <Route path="/">
          <Redirect to="/home" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
