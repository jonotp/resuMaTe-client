import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import { Button } from "@material-ui/core";
import { ButtonProps } from "@material-ui/core";
import "./custom-button";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: green[300],
      main: green[500],
      dark: green[700],
      contrastText: "#fff",
    },
  },
});

function GreenButton(props: ButtonProps) {
  return (
    <ThemeProvider theme={theme}>
      <Button {...props} color="primary"></Button>
    </ThemeProvider>
  );
}

function GreenButtonLarge(props: ButtonProps) {
  return (
    <ThemeProvider theme={theme}>
      <Button
        {...props}
        className="btn-lg"
        color="primary"
        size="large"
      ></Button>
    </ThemeProvider>
  );
}

export { GreenButton, GreenButtonLarge };
