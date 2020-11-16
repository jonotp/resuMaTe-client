import React from "react";
import WithPageLoad from "./WithPageLoad.jsx";
import { GreenButton } from "../CustomButton/GreenButton.jsx";

function Introduction({ state, setState, onContinue }) {
  return (
    <div className="resume-builder-section">
    <h1 className="resume-builder-heading">Introduction</h1>
      <div className="resume-builder-description">
        Before we get started, we'll ask a few questions to personalise your
        resume. Are you ready?
      </div>
      <GreenButton onClick={onContinue} variant="contained">
        Continue
      </GreenButton>
    </div>
  );
}

export default WithPageLoad(Introduction);
