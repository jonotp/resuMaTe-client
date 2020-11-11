import React from "react";
import WithPageLoad from "./WithPageLoad.jsx";
import { Button } from "@material-ui/core";

function Certifications({ state, setState, onContinue }) {
  return (<div>
    <h2>Certifications</h2>
    <Button onClick={onContinue} variant="contained">Continue</Button>
  </div>)
}

export default WithPageLoad(Certifications);

