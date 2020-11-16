import React, { useState } from "react";
import { format } from "date-fns";
import { v4 as uuidv4 } from "uuid";
import WithPageLoad from "./WithPageLoad";
import {
  Divider,
  IconButton,
  Select,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
} from "@material-ui/core";
import { GreenButton } from "../CustomButton/GreenButton";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { AddButton } from "../CustomButton/AddButton";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import CloseIcon from "@material-ui/icons/Close";
import { DatePicker } from "@material-ui/pickers";
import "./education.scss";

function Education({ state, setState, onContinue }) {
  const [hasError, setHasError] = useState(false);

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
          x.endDate === undefined ||
          x.mark === undefined ||
          x.program.length === 0 ||
          x.schoolName.length === 0 ||
          x.mark.length === 0
      ) === undefined;

    setHasError(!isValid);
    return isValid;
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="resume-builder-section">
      <h1 className="resume-builder-heading">Education</h1>
      <div className="resume-builder-description">
        Include relevant education experience
      </div>
      {state !== null
        ? state.map((x) => (
            <Form
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

function Form({ education, handleChange, onDelete, onDateChange, hasError }) {
  const [showForm, setShowForm] = useState(true);
  const [showMore, setShowMore] = useState(false);

  const handleDelete = () => {
    onDelete(education.id);
  };

  const handleDateChange = (property) => (date) => {
    if (date !== null) {
      onDateChange(property, date.toISOString());
    }
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
          {education.program || "Missing program"} (
          {education.endDate !== undefined
            ? format(new Date(education.endDate), "LLL yyyy")
            : format(new Date(), "LLL yyyy")}
          )
        </p>
        <p className="school-name-summary">
          {education.schoolName || "Missing institution's name"}
          {education.state !== undefined && education.state.length > 0
            ? `, ${education.state}`
            : ""}
          {education.city !== undefined && education.city.length > 0
            ? `, ${education.city}`
            : ""}
        </p>
        <p className="mark-summary">{education.mark || "Missing mark"}</p>
      </div>

      {/* Form */}
      <section className="education-form-section">
        <TextField
          id={`program-${education.id}`}
          name="program"
          label="Degree / Program"
          variant="outlined"
          margin="none"
          style={{ gridArea: "program" }}
          value={education.program || ""}
          onChange={handleChange}
          error={
            hasError &&
            (education.program === undefined || education.program.length === 0)
          }
          required
        />
        <TextField
          id={`school-name-${education.id}`}
          name="schoolName"
          label="Educational Institution's name"
          variant="outlined"
          margin="none"
          style={{ gridArea: "school-name" }}
          value={education.schoolName || ""}
          onChange={handleChange}
          error={
            hasError &&
            (education.schoolName === undefined ||
              education.schoolName.length === 0)
          }
          required
        />
        <DatePicker
          id={`end-date-${education.id}`}
          name="endDate"
          label="Graduation Date"
          margin="none"
          inputVariant="outlined"
          format="MMM yyyy"
          className="date"
          style={{ gridArea: "end-date" }}
          value={education.endDate || null}
          onChange={handleDateChange("endDate")}
          error={hasError && education.endDate === undefined}
          required
        />
        <TextField
          id={`mark-${education.id}`}
          name="mark"
          label="Mark"
          variant="outlined"
          margin="none"
          style={{ gridArea: "mark" }}
          value={education.mark || ""}
          onChange={handleChange}
          error={
            hasError &&
            (education.mark === undefined || education.mark.length === 0)
          }
          required
        />
        <Divider style={{ gridArea: "divider" }} variant="middle" />
        <div
          className={showMore ? "more-details active" : "more-details"}
          style={{ gridArea: "more" }}
        >
          <DatePicker
            id={`start-date-${education.id}`}
            name="startDate"
            label="Enrolled Date"
            margin="none"
            inputVariant="outlined"
            format="MMM yyyy"
            className="date"
            style={{ gridArea: "start-date" }}
            value={education.startDate || null}
            onChange={handleDateChange("startDate")}
          />
          <FormControl style={{ gridArea: "has-graduated" }} variant="outlined">
            <InputLabel id={`has-graduted-label-${education.id}`}>
              Graduated?
            </InputLabel>
            <Select
              id={`has-graduated-${education.id}`}
              name="hasGraduated"
              labelid={`has-graduated-label-${education.id}`}
              label="Graduated?"
              value={education.hasGraduated || false}
              onChange={handleChange}
            >
              <MenuItem value={true}>Yes</MenuItem>
              <MenuItem value={false}>No</MenuItem>
            </Select>
          </FormControl>
          <TextField
            id={`country-${education.id}`}
            name="country"
            label="Country"
            variant="outlined"
            margin="none"
            style={{ gridArea: "country" }}
            value={education.country || ""}
            onChange={handleChange}
          />
          <TextField
            id={`state-${education.id}`}
            name="state"
            label="State"
            variant="outlined"
            margin="none"
            style={{ gridArea: "state" }}
            value={education.state || ""}
            onChange={handleChange}
          />
          <TextField
            id={`city-${education.id}`}
            name="city"
            label="City"
            variant="outlined"
            margin="none"
            style={{ gridArea: "city" }}
            value={education.city || ""}
            onChange={handleChange}
          />
          <div className="hide-button" style={{ gridArea: "hide" }}>
            <GreenButton
              variant="text"
              size="small"
              margin="none"
              onClick={() => setShowMore(false)}
            >
              Hide
            </GreenButton>
          </div>
        </div>
        <div
          className={showMore ? "show-button" : "show-button active"}
          style={{ gridArea: "show-button" }}
        >
          <GreenButton
            variant="text"
            size="small"
            margin="none"
            onClick={() => setShowMore(true)}
          >
            Show more
          </GreenButton>
        </div>
      </section>
    </div>
  );
}

export default WithPageLoad(Education);
