import React from "react";
import { Switch, Route } from "react-router";

export default (
  <Switch>
    <Route>
      <Route path="/" />
      <Route path="/workshops" />
      <Route path="/exhibitions" />
      <Route path="/guest-talks" />
      <Route path="/our-team" />
      <Route path="/about-us" />
      <Route path="/club-events" />
      <Route path="/department-events" />
      <Route path="/club-events/:eventName" />
      <Route path="/club-events/:eventName/about" />
      <Route path="/club-events/:eventName/rules" />
      <Route path="/club-events/:eventName/details" />
      <Route path="/club-events/:eventName/register" />
      <Route path="/department-events/:eventName" />
      <Route path="/department-events/:eventName/about" />
      <Route path="/department-events/:eventName/rules" />
      <Route path="/department-events/:eventName/details" />
      <Route path="/department-events/:eventName/register" />
    </Route>
  </Switch>
);
