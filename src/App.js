import React from "react";

import { Switch, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Deals from "./Pages/Deals";
import Cart from "./Pages/Cart";

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
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
