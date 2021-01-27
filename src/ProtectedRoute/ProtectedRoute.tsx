import React, { FunctionComponent, useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import AuthenticationContext from "../Authentication/Authentication.Context";
import * as ROUTES from "../routes";

interface ProtectedRouteProp {
  Component: FunctionComponent<any>;
  isReady?: boolean;
  path: string;
  [propName: string]: any;
}

function ProtectedRoute({
  Component,
  isReady,
  path,
  ...rest
}: ProtectedRouteProp) {
  const { auth } = useContext(AuthenticationContext);

  // isReady is needed because we need to know when the firebase listener has been add
  // so we can then evaluate whether we should re-direct from the route or not
  return !isReady ? null : (
    <Route
      {...rest}
      render={(props) =>
        !!auth ? (
          <Component {...props} />
        ) : (
          <Redirect from={path} to={ROUTES.SIGN_IN} />
        )
      }
    />
  );
}

export default ProtectedRoute;
