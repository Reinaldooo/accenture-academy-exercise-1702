import React from "react";
import { Switch, Route } from "react-router-dom";
//
import Landing from "../views/pages/Landing";
import Login from "../views/pages/Login";
import ForgotPasswd from "../views/pages/ForgotPasswd";

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/login" component={Login} />
    <Route path="/forgot-passwd" component={ForgotPasswd} />

    {/* <Route path="/dashboard" component={Dashboard} isPrivate /> */}
  </Switch>
);

export default Routes;
