import React from "react";
import { Switch, Route } from "react-router";

export default (
  <Switch>
    <Route>
      <Route path="/" />
      <Route path="/club-events" />
      <Route path="/department-events" />
      <Route path="/club-events/:eventName" />
      <Route path="/department-events/:eventName" />
      <Route path="/workshops" />
      <Route path="/guest-talks" />
      <Route path="/our-team" />
      <Route path="/about-theme" />
    </Route>
  </Switch>
);
