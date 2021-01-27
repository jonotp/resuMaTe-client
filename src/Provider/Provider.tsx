import React, { PropsWithChildren } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import FirebaseProvider from "../Firebase/Firebase.Provider";
import AuthenticationProvider from "../Authentication/Authentication.Provider";
import SideBarProvider from "../WithSideBar/SideBar.provider";
import theme from "../theme";

function Provider({ children }: PropsWithChildren<any>) {
  return (
    <AuthenticationProvider>
      <FirebaseProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <SideBarProvider>{children}</SideBarProvider>
          </MuiPickersUtilsProvider>
        </ThemeProvider>
      </FirebaseProvider>
    </AuthenticationProvider>
  );
}

export default Provider;