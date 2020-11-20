import React, { useState } from "react";
import WithPageLoad from "../WithPageLoad.jsx";
import { GreenButton } from "../../CustomButton/GreenButton.jsx";
import FinaliseFormDetails from "./FinaliseFormDetails.jsx";
import CareerObjective from "./CareerObjective";

function Finalise({ state, setState, onContinue }) {
  const [hasError, setHasError] = useState(false);

  const handleChange = (event) => {
    setState((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.valu,
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
      className="resume-builder-section finalise-section"
    >
      <h1 className="resume-builder-heading">Finalise</h1>
      <div className="resume-builder-description">
        Finalise your personal details
      </div>
      {
        <FinaliseFormDetails
          applicant={state}
          onInputChange={handleChange}
          hasError={hasError}
        />
      }
      <div className="resume-builder-description mt-4">
        Make your intentions clear with a career objective
      </div>
      {
        <CareerObjective
          careerObjective={state.careerObjective}
          onInputChange={handleChange}
        />
      }
      <GreenButton type="submit" variant="contained" color="primary">
        Continue
      </GreenButton>
    </form>
  );
}

export default WithPageLoad(Finalise);
