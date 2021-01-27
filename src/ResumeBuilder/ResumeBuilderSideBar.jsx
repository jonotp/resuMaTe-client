import React from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import WithSideBar from "../WithSideBar/WithSideBar";
import * as ROUTES from "../routes.js";

const SideBarLinks = [
  { text: "Introduction", route: ROUTES.RESUME_BUILDER.INTRODUCTION },
  { text: "Personal", route: ROUTES.RESUME_BUILDER.PERSONAL },
  { text: "Education", route: ROUTES.RESUME_BUILDER.EDUCATION },
  { text: "Certifications", route: ROUTES.RESUME_BUILDER.CERTIFICATIONS },
  { text: "Work Experience", route: ROUTES.RESUME_BUILDER.WORK_EXPERIENCE },
  { text: "Skills", route: ROUTES.RESUME_BUILDER.SKILLS },
  // { text: "Reference", route: ROUTES.RESUME_BUILDER.REFERENCES },
  { text: "Finalise", route: ROUTES.RESUME_BUILDER.FINALISE },
];

function ResumeBuilderSidebar({ latestPage }) {
  const history = useHistory();
  const handleClick = (route) => () => {
    history.push(ROUTES.RESUME_BUILDER_BASE + route);
  };

  return (
    <List>
      {SideBarLinks.map((x, i) => (
        <ListItem
          button
          // disabled={i > latestPage}
          key={x.text}
          onClick={handleClick(x.route)}
        >
          <ListItemText primary={x.text} />
        </ListItem>
      ))}
    </List>
  );
}

export default WithSideBar(ResumeBuilderSidebar);
