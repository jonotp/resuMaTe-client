import React, { FormEvent, useState } from "react";
import WithPageLoad from "../WithPageLoad";
import { GreenButton } from "../../CustomButton/GreenButton";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { AddButton } from "../../CustomButton/AddButton";
import EducationItem from "./EducationItem";
import {
  DefaultEducation,
  IEducation,
} from "../../Shared/Interfaces/Education.interface";
import { ResumeBuilderSectionProps } from "../../Shared/Interfaces/ResumeBuilder.interface";
import "./education.scss";
import {
  UseStateHelperArrayElementIDAdd,
  UseStateHelperArrayElementIDChange,
  UseStateHelperArrayElementIDDelete,
  UseStateHelperArrayElementIDInputChange,
} from "../../Shared/Functions/UseStateHelper";

function Education({
  state,
  setState,
  onContinue,
}: ResumeBuilderSectionProps<IEducation[]>) {
  const [hasError, setHasError] = useState(false);

  const handleAdd = UseStateHelperArrayElementIDAdd(setState)(DefaultEducation);
  const handleDelete = UseStateHelperArrayElementIDDelete(setState);
  const handleInputChange = UseStateHelperArrayElementIDInputChange(setState);
  const handleChange = UseStateHelperArrayElementIDChange(setState);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!validate()) return;
    onContinue();
  };

  const validate = () => {
    const isValid =
      state.find(
        (x) =>
          x.program === undefined ||
          x.school === undefined ||
          x.completionDate === null ||
          x.program.length === 0 ||
          x.school.length === 0
      ) === undefined;

    setHasError(!isValid);
    return isValid;
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="resume-builder-section education-section"
    >
      <h1 className="resume-builder-heading">Education</h1>
      <div className="resume-builder-description">
        Include relevant education experience
      </div>
      {state !== null
        ? state.map((x) => (
            <EducationItem
              education={x}
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
        Add education
      </AddButton>
      <GreenButton type="submit" variant="contained" color="primary">
        Continue
      </GreenButton>
    </form>
  );
}

export default WithPageLoad(Education);
