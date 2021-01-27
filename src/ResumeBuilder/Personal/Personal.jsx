import React, { useState } from "react";
import WithPageLoad from "../WithPageLoad.jsx";
import { GreenButton } from "../../CustomButton/GreenButton.jsx";
import PersonalFormDetails from "./PersonalFormDetails.jsx";
import "./personal.scss";

function Personal({ state, setState, onContinue }) {
  const [hasError, setHasError] = useState(false);

  const handleChange = (event) => {
    setState((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validate()) return;
    onContinue();
  };

  const validate = () => {
    const isValid = !(
      state.firstName.trim().length === 0 ||
      state.email.trim().length === 0 ||
      state.phone.trim().length === 0 ||
      state.positionTitle.trim().length === 0
    );

    setHasError(!isValid);
    return isValid;
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="resume-builder-section personal-section"
    >
      <h1 className="resume-builder-heading">Personal</h1>
      <div className="resume-builder-description">
        Include your personal details & contact information 
      </div>
      {
        <PersonalFormDetails
          applicant={state}
          onInputChange={handleChange}
          hasError={hasError}
        />
      }
      <GreenButton type="submit" variant="contained" color="primary">
        Continue
      </GreenButton>
    </form>
  );
}

export default WithPageLoad(Personal);
