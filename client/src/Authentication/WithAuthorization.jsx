import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import FirebaseContext from "../Firebase/Firebase.Context";
import AuthenticationContext from "./Authentication.Context";
import * as ROUTES from "../routes";

function WithAuthorization(condition) {
  return function WithAuthorizationComponent(Component) {
    return (props) => {
      const history = useHistory();
      const { auth, setAuth } = useContext(AuthenticationContext);
      const firebase = useContext(FirebaseContext);
      useEffect(() => {
        const listener = firebase?.auth.onAuthStateChanged((authUser) => {
          if (authUser === null) {
            console.log("Unauthenticated user");
            history.push(ROUTES.SIGN_IN);
          } else if (!condition(authUser)) {
            console.log("User is not authorized for this route");
            history.push(ROUTES.NOT_FOUND);
          } else {
            setAuth(authUser);
            console.log("User is authorized");
          }
        });

        return () => {
          if (listener !== undefined) listener();
        };
      });

      return condition(auth) ? <Component {...props} /> : null;
    };
  };
}

export default WithAuthorization;
