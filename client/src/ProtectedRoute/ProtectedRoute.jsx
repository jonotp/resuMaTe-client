import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import AuthenticationContext from "../Authentication/Authentication.Context.jsx";
import * as ROUTES from "../routes.js";

function ProtectedRoute({ Component, isReady, ...rest }) {
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
          <Redirect from={rest.path} to={ROUTES.SIGN_IN} />
        )
      }
    />
  );
}

export default ProtectedRoute;
