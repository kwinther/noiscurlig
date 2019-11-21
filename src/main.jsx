import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "./about";
import Home from "./home";
import Players from "./players";
import Teams from "./teams";
import ScoreTable from "./scoretable";

function Main() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/players" component={Players} />
        <Route path="/teams" component={Teams} />
        <Route path="/scoretable" component={ScoreTable} />
      </Switch>
    </div>
  );
}

export default Main;
