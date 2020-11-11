import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import NavBar from '../NavBar/NavBar.jsx';
import "./app.scss";
import theme from '../theme.js';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<NavBar />
			<h1>Content to display here</h1>
		</ThemeProvider>
	)
}

export default App;