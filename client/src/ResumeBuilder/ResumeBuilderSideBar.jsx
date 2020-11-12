import React from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import * as ROUTES from "../routes.js";

const SideBarLinks = [
  { text: "Introduction", route: ROUTES.RESUME_BUILDER.INTRODUCTION },
  { text: "Education", route: ROUTES.RESUME_BUILDER.EDUCATION },
  { text: "Certifications", route: ROUTES.RESUME_BUILDER.CERTIFICATIONS },
  { text: "Work Experience", route: ROUTES.RESUME_BUILDER.WORK_EXPERIENCE },
  { text: "Skills", route: ROUTES.RESUME_BUILDER.SKILLS },
  { text: "Career Objective", route: ROUTES.RESUME_BUILDER.CAREER_OBJECTIVE },
  { text: "Reference", route: ROUTES.RESUME_BUILDER.REFERENCES },
  { text: "Finalise", route: ROUTES.RESUME_BUILDER.FINALISE },
];

function ResumeBuilderSidebar() {
  const history = useHistory();
  const handleClick = (route) => () => {
    history.push(ROUTES.RESUME_BUILDER_BASE + route);
  };

  return (
    <div>
      <List>
        {SideBarLinks.map((x) => (
          <ListItem button key={x.text} onClick={handleClick(x.route)}>
            <ListItemText primary={x.text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default ResumeBuilderSidebar;
