import React, { useContext, useEffect, useState } from "react";
import * as ROUTES from "../routes";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import FirebaseContext from "../Firebase/Firebase.Context";
import AuthenticationContext from "../Authentication/Authentication.Context";
import NavBar from "../NavBar/NavBar";
import ResumeBuilder from "../ResumeBuilder/ResumeBuilder";
import NotFound from "../NotFound/NotFound";
import SignIn from "../SignIn/SignIn";
import "./app.scss";

function App() {
  const [isMounted, setIsMounted] = useState(false);
  const { setAuth } = useContext(AuthenticationContext);
  const firebase = useContext(FirebaseContext);

  // Firebase auth listener
  useEffect(() => {
    const listener = firebase?.auth.onAuthStateChanged((authUser) => {
      if (authUser === null) {
        console.log("Not authenticated");
        setAuth(null);
      } else {
        console.log("Authenticated");
        setAuth(authUser);
      }

      setIsMounted(true);
    });

    return () => {
      if (listener !== undefined) listener();
    };
  }, []);

  return (
    <Router>
      <NavBar />
      <div className="app-body">
        <div className="content">
          <Switch>
            <Route path={ROUTES.SIGN_IN} render={() => <SignIn />} />
            <ProtectedRoute
              path={ROUTES.RESUME_BUILDER_BASE}
              isReady={isMounted}
              Component={ResumeBuilder}
            />
            <Route path={ROUTES.NOT_FOUND} render={() => <NotFound />} />
            <Redirect exact from="/" to={ROUTES.RESUME_BUILDER_BASE} />
            <Redirect from="*" to={ROUTES.NOT_FOUND} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
