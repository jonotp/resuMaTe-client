import { createMuiTheme } from "@material-ui/core/styles";
const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#CCD8DB",
      main: "#C1CDD1",
      dark: "#B4C0C5",
      contrastText:"#575C5F"
    },
    secondary:{
      light: "#F4F1EF",
      main: "#EAE6E4",
      dark: "#DEDAD7",
      contrastText:"#575C5F"
    }
  },
});
export default theme;
