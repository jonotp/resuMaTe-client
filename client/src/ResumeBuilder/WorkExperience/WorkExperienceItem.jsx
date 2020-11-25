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
import "./work-experience.scss";

function WorkExperienceItem({
  workExperience,
  onInputChange,
  onChange,
  onDelete,
  hasError,
}) {
  const [showForm, setShowForm] = useState(true);

  const handleDelete = () => {
    onDelete(workExperience.id);
  };

  const handleDateChange = (property) => (date) => {
    if (date !== null) {
      onChange(property, date.toISOString());
    }
  };

  const reponsibilityPlaceholder = `Responsibility #1
  
Responsibility #2

Responsibility #3`;

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
          {workExperience.location.length > 0
            ? `, ${workExperience.location}`
            : null}
        </p>
        <p>Responsibilities</p>
        <pre className="summary-responsibilities">{workExperience.responsibilities || "Missing Responsibilities"}</pre>
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
          placeholder="Street Address, City, State"
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
        <TextField
          id={`responsibilities-${workExperience.id}`}
          name="responsibilities"
          label="Responsibilities"
          variant="outlined"
          margin="none"
          style={{ gridArea: "responsibilities" }}
          value={workExperience.responsibilities}
          onChange={onInputChange}
          rows={5}
          rowsMax={10}
          fullWidth
          multiline
          required
          placeholder={reponsibilityPlaceholder}
          error={hasError && workExperience.responsibilities.length === 0}
          helperText="Separate responsibilities with an empty line"
        />
      </div>
    </div>
  );
}

export default WorkExperienceItem;
