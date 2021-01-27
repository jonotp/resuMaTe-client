import React from "react";
import { GreenButtonLarge } from "../CustomButton/GreenButton";
import "./custom-button";

function AddButton(props) {
  return (
    <div className="add-btn">
      <GreenButtonLarge {...props} color="primary"></GreenButtonLarge>
    </div>
  )
}
export { AddButton };