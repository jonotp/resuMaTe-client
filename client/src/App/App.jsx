import React from "react";
import * as ROUTES from "../routes.js";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import ResumeBuilder from "../ResumeBuilder/ResumeBuilder";
import NotFound from "../NotFound/NotFound";
import SideBar from "../SideBar/SideBar";
import SignIn from "../SignIn/SignIn";
import "./app.scss";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="app-body">
        <SideBar />
        <div className="content">
          <Switch>
            <Route
              path={ROUTES.SIGN_IN}
              render={(props) => <SignIn {...props} />}
            />
            <Route
              path={ROUTES.RESUME_BUILDER_BASE}
              render={(props) => <ResumeBuilder {...props} />}
            />
            <Route
              path={ROUTES.NOT_FOUND}
              render={(props) => <NotFound {...props} />}
            />
            <Redirect exact from="/" to={ROUTES.RESUME_BUILDER_BASE} />
            <Redirect from="*" to={ROUTES.NOT_FOUND} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
