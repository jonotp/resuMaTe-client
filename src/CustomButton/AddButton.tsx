import React from "react";
import { GreenButtonLarge } from "./GreenButton";
import { ButtonProps } from "@material-ui/core";
import "./custom-button";

function AddButton(props : ButtonProps) {
  return (
    <div className="add-btn">
      <GreenButtonLarge {...props} color="primary"></GreenButtonLarge>
    </div>
  )
}
export { AddButton };