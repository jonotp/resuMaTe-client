import React, { ChangeEvent, FormEvent, useState } from "react";
import WithPageLoad from "../WithPageLoad";
import { GreenButton } from "../../CustomButton/GreenButton";
import PersonalFormDetails from "./PersonalFormDetails";
import { ResumeBuilderSectionProps } from "../../Shared/Interfaces/ResumeBuilder.interface";
import { IPersonal } from "../../Shared/Interfaces/Personal.interface";
import "./personal.scss";

function Personal({
  state,
  setState,
  onContinue,
}: ResumeBuilderSectionProps<IPersonal>) {
  const [hasError, setHasError] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setState((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!validate()) return;
    onContinue();
  };

  const validate = () => {
    const isValid = !(
      state.firstName.trim().length === 0 ||
      state.email.trim().length === 0 ||
      state.phone.trim().length === 0 ||
      state.address.trim().length === 0
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
