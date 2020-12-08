import React from "react";
import { useContext } from "react";
import SideBarContext from "./SideBar.context";
import { Drawer } from "@material-ui/core";
import "./with-side-bar";

function WithSideBar(Component) {
  return (props) => {
    const { isSideBarOpen, setIsSideBarOpen } = useContext(SideBarContext);
    return (
      <>
        <Drawer
          variant="temporary"
          open={isSideBarOpen}
          onClose={() => setIsSideBarOpen(false)}
          className="side-bar-collapsible"
        >
          <Component {...props} />
        </Drawer>
        <Drawer variant="permanent" className="side-bar-permanent">
          <Component {...props} />
        </Drawer>
      </>
    );
  };
}

export default WithSideBar;
