import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import FirebaseProvider from "../Firebase/Firebase.Provider.jsx";
import AuthenticationProvider from "../Authentication/Authentication.Provider.jsx";
import theme from "../theme.js";

function Provider({ children }) {
  return (
    <AuthenticationProvider>
      <FirebaseProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            {children}
          </MuiPickersUtilsProvider>
        </ThemeProvider>
      </FirebaseProvider>
    </AuthenticationProvider>
  );
}

export default Provider;
