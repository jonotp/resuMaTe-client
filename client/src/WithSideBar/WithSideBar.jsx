import React from "react";
import { Drawer } from "@material-ui/core";
import "./with-side-bar";

function WithSideBar(Component) {
  return (props) => {
    return (
      <Drawer variant="permanent" className="side-bar">
        <Component {...props} />
      </Drawer>
    );
  };
}

export default WithSideBar;
