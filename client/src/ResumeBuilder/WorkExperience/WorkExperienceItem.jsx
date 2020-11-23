import React, { useState } from "react";
import { format } from "date-fns";
import {
  Divider,
  IconButton,
  Select,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
} from "@material-ui/core";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import CloseIcon from "@material-ui/icons/Close";
import { DatePicker } from "@material-ui/pickers";
import ListItem from "../ListItem";
import { GreenButton } from "../../CustomButton/GreenButton";
import "./work-experience.scss";

function WorkExperienceItem({
  workExperience,
  onInputChange,
  onChange,
  onDelete,
  hasError,
}) {
  const [showForm, setShowForm] = useState(true);

  const handleAddResponsibilities = () => {
    onChange("responsibilities", workExperience.responsibilities.concat(""));
  };

  const handleDeleteResponsibilities = (index) => () => {
    onChange(
      "responsibilities",
      workExperience.responsibilities.filter((x, i) => i !== index)
    );
  };

  const handleEditResponsibilities = (index) => (event) => {
    onChange(
      "responsibilities",
      workExperience.responsibilities.map((x, i) =>
        i === index ? event.target.value : x
      )
    );
  };

  const handleDelete = () => {
    onDelete(workExperience.id);
  };

  const handleDateChange = (property) => (date) => {
    if (date !== null) {
      onChange(property, date.toISOString());
    }
  };

  return (
    <div className={showForm ? "card-container active" : "card-container"}>
      {/* Header */}
      <div className="card-header">
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
        <p className="summary-title">
          {workExperience.title || "Missing job title"} (
          {workExperience.startDate !== null
            ? format(new Date(workExperience.startDate), "LLL yyyy")
            : "Missing start date"}
          {" - "}
          {workExperience.isCurrentJob
            ? "Present"
            : workExperience.endDate !== null
            ? format(new Date(workExperience.endDate), "LLL yyyy")
            : "Missing end date"}
          )
        </p>
        <p>
          {workExperience.company || "Missing company's name"}
          {workExperience.location.length > 0 ? `, ${workExperience.location}` : null}
        </p>
        <p>Responsibilities ({workExperience.responsibilities.length})</p>
      </div>

      {/* Form */}
      <div className="resume-form-fields">
        <TextField
          id={`title-${workExperience.id}`}
          name="title"
          label="Job Title"
          variant="outlined"
          margin="none"
          style={{ gridArea: "title" }}
          value={workExperience.title}
          onChange={onInputChange}
          error={hasError && workExperience.title.length === 0}
          required
        />
        <TextField
          id={`company-${workExperience.id}`}
          name="company"
          label="Company Name"
          variant="outlined"
          margin="none"
          style={{ gridArea: "company" }}
          value={workExperience.company}
          onChange={onInputChange}
          error={hasError && workExperience.company.length === 0}
          required
        />
        <TextField
          id={`location-${workExperience.id}`}
          name="location"
          label="Location"
          variant="outlined"
          margin="none"
          style={{ gridArea: "location" }}
          value={workExperience.location}
          onChange={onInputChange}
        />
        <FormControl style={{ gridArea: "is-current-job" }} variant="outlined">
          <InputLabel id={`is-current-job-label-${workExperience.id}`}>
            Currently Working Here?
          </InputLabel>
          <Select
            id={`is-current-job-${workExperience.id}`}
            name="isCurrentJob"
            labelid={`is-current-job-label-${workExperience.id}`}
            label="Currently Working Here?"
            value={workExperience.isCurrentJob}
            onChange={onInputChange}
            required
          >
            <MenuItem value={true}>Yes</MenuItem>
            <MenuItem value={false}>No</MenuItem>
          </Select>
        </FormControl>
        <DatePicker
          id={`start-date-${workExperience.id}`}
          name="startDate"
          label="Employment Start Date"
          margin="none"
          inputVariant="outlined"
          format="MMM yyyy"
          className="date"
          style={{ gridArea: "start-date" }}
          value={workExperience.startDate}
          onChange={handleDateChange("startDate")}
          error={hasError && workExperience.startDate === null}
          required
        />
        {workExperience.isCurrentJob ? null : (
          <DatePicker
            id={`end-date-${workExperience.id}`}
            name="endDate"
            label="Employment End Date"
            margin="none"
            inputVariant="outlined"
            format="MMM yyyy"
            className="date"
            style={{ gridArea: "end-date" }}
            value={workExperience.endDate}
            onChange={handleDateChange("endDate")}
            error={hasError && workExperience.endDate === null}
            required
          />
        )}
        <Divider style={{ gridArea: "divider" }} variant="middle" />
        <div
          className="responsibilities-container"
          style={{ gridArea: "responsibilities" }}
        >
          {workExperience.responsibilities.map((x, i) => (
            <ListItem
              key={i}
              id={workExperience.id}
              name="Responsibility"
              index={i}
              value={x}
              handleChange={handleEditResponsibilities(i)}
              handleDelete={handleDeleteResponsibilities(i)}
              hasError={hasError}
            />
          ))}
          <div className="text-button">
            <GreenButton
              variant="text"
              size="small"
              margin="none"
              onClick={handleAddResponsibilities}
            >
              Add responsibility
            </GreenButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkExperienceItem;
