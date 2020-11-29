import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
} from "@material-ui/core";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import * as ROUTES from "../routes";
import { useLocation } from "react-router-dom";
import ResumeBuilderSidebar from "../ResumeBuilder/ResumeBuilderSideBar.jsx";

const drawerWidth = 240;

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: drawerWidth,
      flexShrink: 0,
      "@media print": {
        display: "none",
      },
    },
    drawerPaper: {
      width: drawerWidth,
      paddingTop: "4rem",
    },
    drawerContainer: {
      overflow: "auto",
    },
  })
);

function SideBar() {
  const classes = useStyles();
  const location = useLocation();

  const isNoSideBarPAge = location.pathname.match(ROUTES.SIGN_IN) !== null;
  const isResumeBuilderPage =
    location.pathname.match(ROUTES.RESUME_BUILDER_BASE) !== null;

  return isNoSideBarPAge ? null : (
    <Drawer
      variant="permanent"
      className={classes.root}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerContainer}>
        {isResumeBuilderPage ? <ResumeBuilderSidebar /> : <RegularSideBar />}
      </div>
    </Drawer>
  );
}

const RegularSideBar = () => {
  return (
    <div>
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default SideBar;
