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
          {education.program || "Missing program"} (
          {education.endDate !== undefined
            ? format(new Date(education.endDate), "LLL yyyy")
            : "Missing graudation date"}
          )
        </p>
        <p>
          {education.schoolName || "Missing institution's name"}
          {education.state !== undefined && education.state.length > 0
            ? `, ${education.state}`
            : ""}
          {education.city !== undefined && education.city.length > 0
            ? `, ${education.city}`
            : ""}
        </p>
        <p>{education.mark || "Missing mark"}</p>
      </div>

      {/* Form */}
      <div className="required-form-fields">
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
          className={`${showMore ? "active": ""} additional-form-fields`}
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
          <div className="hide-fields-button" style={{ gridArea: "hide-fields-button" }}>
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
          className={showMore ? "show-fields-button" : "show-fields-button active"}
          style={{ gridArea: "show-fields-button" }}
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
