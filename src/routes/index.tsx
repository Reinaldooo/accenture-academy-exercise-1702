import React from "react";
import { Switch, Route } from "react-router-dom";
//
import Landing from "../views/pages/Landing";
import Login from "../views/pages/Login";
import Dashboard from "../views/pages/Dashboard";
import ForgotPasswd from "../views/pages/ForgotPasswd";
import PrivateRoute from "./PrivateRoute";

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/login" component={Login} />
    <Route path="/forgot-passwd" component={ForgotPasswd} />
    <PrivateRoute path="/dashboard" component={Dashboard} />
  </Switch>
);

export default Routes;
