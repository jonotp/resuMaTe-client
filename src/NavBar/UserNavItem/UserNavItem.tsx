import React from "react";
import { Button, Divider, Menu, MenuItem } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { useContext } from "react";
import AuthenticationContext from "../../Authentication/Authentication.Context";
import SignOutButton from "../../SignOut/SignOut";
import ProfileButton from "../../Profile/ProfileButton";
import "./user-nav-item.scss";

function UserNavItem() {
  const { auth } = useContext(AuthenticationContext);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return !!auth ? (
    <div className="user-nav-item">
      <Button
        aria-controls="user-menu"
        aria-haspopup="true"
        color="inherit"
        onClick={handleClick}
      >
        <div className="user-menu-button">
          <AccountCircleIcon />
          <span className="nav-user">{auth.email}</span>
        </div>
      </Button>
      <Menu
        id="user-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem className="user-menu-item" disabled={true}>
          <ProfileButton hasIcon={true} />
        </MenuItem>
        <Divider />
        <MenuItem className="user-menu-item">
          <SignOutButton hasIcon={true} />
        </MenuItem>
      </Menu>
    </div>
  ) : null;
}

export default UserNavItem;
