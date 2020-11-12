import { createMuiTheme } from "@material-ui/core/styles";
const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#50548d",
      main: "#3e416d",
      dark: "#2f3152",
      contrasttext:"#f3f4f9"
    },
    secondary:{
      light: "#f4f1ef",
      main: "#eae6e4",
      dark: "#dedad7",
      contrasttext:"#575c5f"
    },
    background:{
      paper: "#fff",
      default:"#f3f4f9"
    }
  },
});
export default theme;

