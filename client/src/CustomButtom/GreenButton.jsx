import React from "react";
import {
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles';
import { green  } from '@material-ui/core/colors';
import { Button } from "@material-ui/core";


const theme = createMuiTheme({
  palette: {
    primary: {
      light: green[300],
      main: green[500],
      dark: green[700],
      contrastText:"#fff",
    }
  },
});

function GreenButton(props) {
  return (
    <ThemeProvider theme={theme}>
      <Button {...props} color="primary"></Button>
    </ThemeProvider>
  )
}

export { GreenButton };