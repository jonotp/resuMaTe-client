import React from "react";
import WithPageLoad from "./WithPageLoad.jsx";
import { Button } from "@material-ui/core";

function WorkExperience({ state, setState, onContinue }) {
  return (<div>
    <h2>Work Experience</h2>
    <Button onClick={onContinue} variant="contained">Continue</Button>
  </div>)
}

export default WithPageLoad(WorkExperience);

