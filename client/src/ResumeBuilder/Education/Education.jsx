import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import WithPageLoad from "../WithPageLoad";
import { GreenButton } from "../../CustomButton/GreenButton";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { AddButton } from "../../CustomButton/AddButton";
import EducationItem from "./EducationItem";
import "./education.scss";

const defaultEducation ={
  schoolName: "",
  location: "",
  program: "",
  mark: "",
  startDate: null,
  completionDate: null,
  hasGraduated: false,
}

function Education({ state, setState, onContinue }) {
  const [hasError, setHasError] = useState(false);

  const handleAdd = () => {
    setState((prev) => prev.concat({ id: uuidv4(), ...defaultEducation}));
  };

  const handleDelete = (id) => {
    setState((prev) => prev.filter((x) => x.id !== id));
  };

  const handleChange = (id) => (event) => {
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

  const handleDateChange = (id) => (property, value) => {
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
    const isValid =
      state.find(
        (x) =>
          x.program === undefined ||
          x.schoolName === undefined ||
          x.endDate === null ||
          x.program.length === 0 ||
          x.schoolName.length === 0 
      ) === undefined;

    setHasError(!isValid);
    return isValid;
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="resume-builder-section education-section">
      <h1 className="resume-builder-heading">Education</h1>
      <div className="resume-builder-description">
        Include relevant education experience
      </div>
      {state !== null
        ? state.map((x) => (
            <EducationItem
              education={x}
              handleChange={handleChange(x.id)}
              onDateChange={handleDateChange(x.id)}
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
