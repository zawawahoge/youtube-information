import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import Main from "../components/Main/Main";

export default function Routes() {
  return (
    <Switch>
      <Route path="/main" exact component={Main}></Route>
    </Switch>
  );
}
