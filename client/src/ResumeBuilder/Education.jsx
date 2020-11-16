import React, { useState } from "react";
import { format, isDate } from "date-fns";
import { v4 as uuidv4 } from "uuid";
import WithPageLoad from "./WithPageLoad";
import { IconButton, TextField } from "@material-ui/core";
import { GreenButton } from "../CustomButton/GreenButton";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { AddButton } from "../CustomButton/AddButton";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import CloseIcon from "@material-ui/icons/Close";
import "./education.scss";

function Education({ state, setState, onContinue }) {
  const handleAdd = () => {
    setState((prev) => prev.concat({ id: uuidv4() }));
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

  return (
    <div className="resume-builder-section">
      <h1 className="resume-builder-heading">Education</h1>
      <div className="resume-builder-description">
        Include relevant education experience
      </div>
      {state !== null
        ? state.map((x) => (
            <Form
              education={x}
              handleChange={handleChange(x.id)}
              onDelete={handleDelete}
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
      <GreenButton onClick={onContinue} variant="contained" color="primary">
        Continue
      </GreenButton>
    </div>
  );
}

function Form({ education, handleChange, onDelete }) {
  const [showForm, setShowForm] = useState(true);
  const handleSubmit = () => {
    console.log("Submitting education form");
  };

  console.log(education);

  const handleDelete = () => {
    onDelete(education.id);
  };

  return (
    <div className={showForm ? "education-form active" : "education-form"}>
      
      {/* Header */}
      <div className="form-header">
        {showForm ? (
          <IconButton aria-label="dropdown" onClick={() => setShowForm(false)}>
            <KeyboardArrowUpIcon />
          </IconButton>
        ) : (
          <IconButton aria-label="dropdown" onClick={() => setShowForm(true)}>
            <KeyboardArrowDownIcon />
          </IconButton>
        )}
        <IconButton aria-label="delete" onClick={handleDelete}>
          <CloseIcon />
        </IconButton>
      </div>

      {/* Summary fields */}
      <div className="summary">
        <p className="program-summary">
          {education.program || "Missing program"} ({education.endDate !== undefined ? format(new Date(education.endDate), "LLL yyyy") : "Invaid Date"})
        </p>
        <p className="school-name-summary">{education.schoolName || "Missing institution's name"}, {education.state}, {education.city}</p>
        <p className="mark-summary">{education.mark || "Missing mark"}</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} noValidate>
        <TextField
          id="school-name"
          name="schoolName"
          label="Educational Institution's name"
          variant="outlined"
          margin="none"
          style={{ gridArea: "school-name" }}
          value={education.schoolName || ""}
          onChange={handleChange}
        />
        <TextField
          id="country"
          name="country"
          label="Country"
          variant="outlined"
          margin="none"
          style={{ gridArea: "country" }}
          value={education.country || ""}
          onChange={handleChange}
        />
        <TextField
          id="state"
          name="state"
          label="State"
          variant="outlined"
          margin="none"
          style={{ gridArea: "state" }}
          value={education.state || ""}
          onChange={handleChange}
        />
        <TextField
          id="city"
          name="city"
          label="City"
          variant="outlined"
          margin="none"
          style={{ gridArea: "city" }}
          value={education.city || ""}
          onChange={handleChange}
        />
        <TextField
          id="program"
          name="program"
          label="Degree / Program"
          variant="outlined"
          margin="none"
          style={{ gridArea: "program" }}
          value={education.program || ""}
          onChange={handleChange}
        />
        <TextField
          id="has-graduated"
          name="hasGraduated"
          label="Graduated?"
          variant="outlined"
          margin="none"
          style={{ gridArea: "has-graduated" }}
          value={education.hasGraduated || ""}
          onChange={handleChange}
        />
        <TextField
          id="month"
          name="month"
          label="Month"
          variant="outlined"
          margin="none"
          style={{ gridArea: "month" }}
          value={education.month || ""}
          onChange={handleChange}
        />
        <TextField
          id="year"
          name="year"
          label="Year"
          variant="outlined"
          margin="none"
          style={{ gridArea: "year" }}
          value={education.year || ""}
          onChange={handleChange}
        />
        <TextField
          id="mark"
          name="mark"
          label="Mark"
          variant="outlined"
          margin="none"
          style={{ gridArea: "mark" }}
          value={education.mark || ""}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default WithPageLoad(Education);
