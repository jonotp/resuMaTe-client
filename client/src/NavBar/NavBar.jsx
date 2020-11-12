import React from "react";
import { AppBar, makeStyles, Toolbar } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    fontSize: "1.6rem"
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
    <AppBar className={classes.root} position="sticky" color="secondary">
      <Toolbar>
        <NavLink to="/" activeStyle={{ color: "initial", textDecoration: "initial", fontWeight: "intial" }} >
          Resume<strong className={classes.emphasise}>Ready</strong>
        </NavLink>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
