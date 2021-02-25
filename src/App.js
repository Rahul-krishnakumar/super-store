import React from "react";

import { Switch, Route } from "react-router-dom";

import Home from "./Components/Pages/Home";
import Deals from "./Components/Pages/Deals";
import Cart from "./Components/Pages/Cart";

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
