import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import WithPageLoad from "../WithPageLoad";
import { GreenButton } from "../../CustomButton/GreenButton";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { AddButton } from "../../CustomButton/AddButton";
import WorkExperienceItem from "./WorkExperienceItem";
import "./work-experience.scss";

const defaultWorkExperience ={
  title: "",
  company: "",
  location:"",
  isCurrentJob: false,
  startDate: null,
  endDate: null,
  responsibilities: "",
}

function WorkExperience({ state, setState, onContinue }) {
  const [hasError, setHasError] = useState(false);

  const handleAdd = () => {
    setState((prev) =>
      prev.concat({ id: uuidv4(), ...defaultWorkExperience })
    );
  };

  const handleDelete = (id) => {
    setState((prev) => prev.filter((x) => x.id !== id));
  };

  const handleEventChange = (id) => (event) => {
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

  const handleChange = (id) => (property, value) => {
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

  const handleSubmit = (event) => {
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
        (!x.isCurrentJob && (x.endDate === null))
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
      <h1 className="resume-builder-heading">Work Experience</h1>
      <div className="resume-builder-description">
        Include relevant education experience
      </div>
      {state !== null
        ? state.map((x) => (
            <WorkExperienceItem
              workExperience={x}
              onInputChange={handleEventChange(x.id)}
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
        Add Work Experience
      </AddButton>
      <GreenButton type="submit" variant="contained" color="primary">
        Continue
      </GreenButton>
    </form>
  );
}

export default WithPageLoad(WorkExperience);
