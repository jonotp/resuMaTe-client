import React, { useEffect } from "react";
import WithPageLoad from "./WithPageLoad.jsx";
import { Button } from "@material-ui/core";

function Education({ state, setState, onContinue }) {
  return (<div>
    <h2>Education</h2>
    <Button onClick={onContinue} variant="contained">Continue</Button>
  </div>)
}

export default WithPageLoad(Education);

