import React from "react";
import WithPageLoad from "./WithPageLoad";
import { Button } from "@material-ui/core";
import { ResumeBuilderSectionProps } from "../Shared/Interfaces/ResumeBuilder.interface";

function References({
  state,
  setState,
  onContinue,
}: ResumeBuilderSectionProps<string[]>) {
  return (
    <div>
      <h2>References</h2>
      <Button onClick={onContinue} variant="contained">
        Continue
      </Button>
    </div>
  );
}

export default WithPageLoad(References);
