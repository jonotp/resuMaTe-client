import React from "react";
import WithPageLoad from "./WithPageLoad.jsx";
import { Button } from "@material-ui/core";


function CareerObjective({ state, setState, onContinue }) {
  return (<div>
    <h2>Career Objective</h2>
    <Button onClick={onContinue} variant="contained">Continue</Button>
  </div>)
}

export default WithPageLoad(CareerObjective);

