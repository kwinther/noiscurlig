import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "./about";
import Home from "./home";
import Characters from "./characters";

function Main() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/characters" component={Characters} />
      </Switch>
    </div>
  );
}

export default Main;
