import React from "react";
import { AppBar, IconButton, Toolbar } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import { useContext } from "react";
import SideBarContext from "../WithSideBar/SideBar.context";
import UserNavItem from "./UserNavItem/UserNavItem";
import imagePath from "../Icon/logo-light-no-border.svg";
import "./nav-bar.scss";

function NavBar() {
  const { setIsSideBarOpen } = useContext(SideBarContext);
  const handleClick = () => {
    setIsSideBarOpen((prev) => !prev);
  };

  return (
    <AppBar className="nav-bar" position="sticky" color="primary">
      <Toolbar>
        <IconButton
          className="nav-menu-icon"
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleClick}
        >
          <MenuIcon />
        </IconButton>
        <NavLink to="/" className="nav-header">
          <img className="nav-logo" src={imagePath} />
        </NavLink>
        <UserNavItem />
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
