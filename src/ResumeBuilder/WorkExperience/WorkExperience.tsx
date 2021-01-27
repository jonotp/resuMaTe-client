import React, { FormEvent, useState } from "react";
import WithPageLoad from "../WithPageLoad";
import { GreenButton } from "../../CustomButton/GreenButton";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { AddButton } from "../../CustomButton/AddButton";
import WorkExperienceItem from "./WorkExperienceItem";
import {
  DefaultExperience,
  IExperience,
} from "../../Shared/Interfaces/Experience.interface";
import { ResumeBuilderSectionProps } from "../../Shared/Interfaces/ResumeBuilder.interface";
import "./work-experience.scss";
import {
  UseStateHelperArrayElementIDAdd,
  UseStateHelperArrayElementIDDelete,
  UseStateHelperArrayElementIDInputChange,
  UseStateHelperArrayElementIDChange,
} from "../../Shared/functions/UseStateHelper";

function WorkExperience({
  state,
  setState,
  onContinue,
}: ResumeBuilderSectionProps<IExperience[]>) {
  const [hasError, setHasError] = useState(false);

  const handleAdd = UseStateHelperArrayElementIDAdd(setState)(
    DefaultExperience
  );
  const handleDelete = UseStateHelperArrayElementIDDelete(setState);
  const handleInputChange = UseStateHelperArrayElementIDInputChange(setState);
  const handleChange = UseStateHelperArrayElementIDChange(setState);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!validate()) return;
    onContinue();
  };

  const validate = () => {
    const isValid = !state.some(
      (x) =>
        x.title.trim().length === 0 ||
        x.company.trim().length === 0 ||
        x.responsibilities.trim().length === 0 ||
        x.startDate === null ||
        (!x.isCurrentJob && x.endDate === null)
    );

    setHasError(!isValid);
    return isValid;
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="resume-builder-section work-experience-section"
    >
      <h1 className="resume-builder-heading">Employment History</h1>
      <div className="resume-builder-description">
        Include relevant work experience
      </div>
      {state !== null
        ? state.map((x) => (
            <WorkExperienceItem
              workExperience={x}
              onInputChange={handleInputChange(x.id)}
              onChange={handleChange(x.id)}
              onDelete={handleDelete(x.id)}
              hasError={hasError}
              key={x.id}
            />
          ))
        : null}
      <AddButton
        onClick={handleAdd}
        variant="text"
        color="primary"
        startIcon={<AddCircleOutlineIcon />}
      >
        Add Work Experience
      </AddButton>
      <GreenButton type="submit" variant="contained" color="primary">
        Continue
      </GreenButton>
    </form>
  );
}

export default WithPageLoad(WorkExperience);
