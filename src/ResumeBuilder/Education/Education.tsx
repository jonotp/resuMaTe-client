import React, { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
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

function Education({
  state,
  setState,
  onContinue,
}: ResumeBuilderSectionProps<IEducation[]>) {
  const [hasError, setHasError] = useState(false);

  const handleAdd = () => {
    setState((prev) => prev.concat({ ...DefaultEducation, id: uuidv4() }));
  };

  const handleDelete = (id: string) => {
    setState((prev) => prev.filter((x) => x.id !== id));
  };

  const handleInputChange = (id: string) => (
    event: ChangeEvent<HTMLInputElement | { value: unknown; name: string }>
  ) => {
    setState((prev) => {
      return prev.map((x) =>
        x.id === id
          ? {
              ...x,
              [event.target.name]: event.target.value,
            }
          : x
      );
    });
  };

  const handleChange = (id: string) => (property: string, value: any) => {
    setState((prev) => {
      return prev.map((x) =>
        x.id === id
          ? {
              ...x,
              [property]: value,
            }
          : x
      );
    });
  };

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
              handleInputChange={handleInputChange(x.id)}
              onChange={handleChange(x.id)}
              onDelete={handleDelete}
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
