import React from "react";
import { AppBar, makeStyles, Toolbar } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    fontSize: "1.6rem",
    zIndex: theme.zIndex.drawer + 1,
  },
  emphasise: {
    fontWeight: "bold",
    textDecoration: "underline",
    marginLeft:"0.25rem"
  },
}));

function NavBar() {
  const classes = useStyles();

  return (
    <AppBar className={classes.root} position="sticky" color="primary">
      <Toolbar>
        <NavLink to="/" activeStyle={{ color: "#F3F4F9", textDecoration: "initial", fontWeight: "intial" }} >
          Resume<strong className={classes.emphasise}>Ready</strong>
        </NavLink>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
