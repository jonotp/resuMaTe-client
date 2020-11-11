import React from "react";
import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    fontSize:"1.6rem"
  },
  emphasise: {
    fontWeight:"bold",
    textDecoration:"underline",
    marginLeft:"0.25rem"
  },
}));

function NavBar() {
  const classes = useStyles();

  return (
    <AppBar className={classes.root} position="sticky" color="secondary">
      <Toolbar>
        Resume <strong className={classes.emphasise}>Ready</strong>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
