import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import {
	BrowserRouter as Router
} from "react-router-dom";
import NavBar from '../NavBar/NavBar.jsx';
import ResumeBuilder from '../ResumeBuilder/ResumeBuilder.jsx';
import "./app.scss";
import theme from '../theme.js';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<NavBar />
			<Router>
				<ResumeBuilder />
			</Router>
		</ThemeProvider>
	)
}

export default App;