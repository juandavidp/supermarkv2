import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Login from "./../containers/Login";

const AuthRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Redirect to="/" />
    </Switch>
  );
};

export default AuthRouter;
