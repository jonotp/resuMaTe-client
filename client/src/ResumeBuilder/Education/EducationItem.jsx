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
import { GreenButton } from "../../CustomButton/GreenButton";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import CloseIcon from "@material-ui/icons/Close";
import { DatePicker } from "@material-ui/pickers";
import "./education.scss";

function EducationItem({
  education,
  handleChange,
  onDelete,
  onDateChange,
  hasError,
}) {
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
          {education.program || "Missing program"}
        </p>
        <p>
          {education.completionDate !== undefined
            ? `Completed on ${format(new Date(education.completionDate), "LLL yyyy")}`
            : "Missing completion date"}
        </p>
        <p>
          {education.schoolName || "Missing institution's name"}
          {education.location !== undefined && education.location.length > 0
            ? `, ${education.location}`
            : null}
        </p>
      </div>

      {/* Form */}
      <div className="resume-form-fields">
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
          id={`completion-date-${education.id}`}
          name="completionDate"
          label="Completion Date"
          margin="none"
          inputVariant="outlined"
          format="MMM yyyy"
          className="date"
          style={{ gridArea: "completion-date" }}
          value={education.completionDate || null}
          onChange={handleDateChange("completionDate")}
          error={hasError && education.completionDate === undefined}
          required
        />
        <Divider style={{ gridArea: "divider" }} variant="middle" />
        <div
          className={`${showMore ? "active" : ""} additional-form-fields`}
          style={{ gridArea: "addition-fields" }}
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
            id={`mark-${education.id}`}
            name="mark"
            label="Mark"
            variant="outlined"
            margin="none"
            style={{ gridArea: "mark" }}
            value={education.mark || ""}
            onChange={handleChange}
            placholder="GPA 2.7"
          />
          <TextField
            id={`location-${education.id}`}
            name="location"
            label="Location"
            variant="outlined"
            margin="none"
            style={{ gridArea: "location" }}
            value={education.location || ""}
            onChange={handleChange}
            placeholder="Street Address, City, State"
          />
          <div
            className="hide-additional-fields-button"
            style={{ gridArea: "hide-additional-fields-button" }}
          >
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
          className={
            showMore
              ? "show-additional-fields-button"
              : "show-additional-fields-button active"
          }
          style={{ gridArea: "show-additional-fields-button" }}
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
      </div>
    </div>
  );
}

export default EducationItem;
