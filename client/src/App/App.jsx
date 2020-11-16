import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import theme from '../theme.js';
import * as ROUTES from "../routes.js";
import {
	BrowserRouter as Router,
	Switch,
	Redirect,
	Route,
} from "react-router-dom";
import NavBar from '../NavBar/NavBar.jsx';
import ResumeBuilder from '../ResumeBuilder/ResumeBuilder.jsx';
import NotFound from "../NotFound/NotFound.jsx";
import "./app.scss";
import SideBar from '../SideBar/SideBar.jsx';


function App() {
	return (

		<ThemeProvider theme={theme}>
			<CssBaseline />
			<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<Router>
				<NavBar />
				<div className="app-body">
					<SideBar />
					<div className="content">
						<Switch>
							<Route path={ROUTES.RESUME_BUILDER_BASE} render={(props) => (<ResumeBuilder {...props} />)} />
							<Route path={ROUTES.NOT_FOUND} render={(props) => (<NotFound {...props} />)} />
							<Redirect exact from="/" to={ROUTES.RESUME_BUILDER_BASE} />
							<Redirect from="*" to={ROUTES.NOT_FOUND} />
						</Switch>
					</div>
				</div>
			</Router>
			</MuiPickersUtilsProvider>
		</ThemeProvider>
	)
}

export default App;