import React, { useState, ChangeEvent } from "react";
import { format } from "date-fns";
import {
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
import { ICertificate } from "../../Shared/Interfaces/Certificate.interface";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";

interface CertificationItemProp {
  certification: ICertificate;
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onChange: (property: string, value: any) => void;
  onDelete: (id: string) => void;
  hasError: boolean;
}

function CertificationItem({
  certification,
  onInputChange,
  onChange,
  onDelete,
  hasError,
}: CertificationItemProp) {
  const [showForm, setShowForm] = useState(true);

  const handleDelete = () => {
    onDelete(certification.id);
  };

  const handleDateChange = (property: string) => (date: MaterialUiPickersDate) => {
    if (date !== null) {
      onChange(property, date.toISOString());
    }
  };

  const handleCheckbox = (
    event: ChangeEvent<{ name?: string; value: unknown }>
  ) => {
    if (event.target.name === undefined)
      throw "select component does not have name";
    onChange(event.target.name, event.target.value === "true");
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
          {certification.name || "Missing certification name"}
        </p>
        <p>{certification.issuer || "Missing issuing organisation"}</p>
        <p className="summary-dates">
          {certification.issueDate !== null
            ? `
            Issued on the ${format(
              new Date(certification.issueDate),
              "do LLL yyyy"
            )}
            `
            : "Missing issued date"}
          {certification.hasExpiryDate
            ? certification.expiryDate !== null
              ? `and valid until the ${format(
                  new Date(certification.expiryDate),
                  "do LLL yyyy"
                )}`
              : "and Missing expiry date"
            : null}
        </p>
      </div>

      {/* Form */}
      <div className="resume-form-fields">
        <TextField
          id={`name-${certification.id}`}
          name="name"
          label="Certification Name"
          variant="outlined"
          margin="none"
          style={{ gridArea: "name" }}
          value={certification.name}
          onChange={onInputChange}
          error={hasError && certification.name.length === 0}
          required
        />
        <TextField
          id={`issuer-${certification.id}`}
          name="issuer"
          label="Issuing Organisation"
          variant="outlined"
          margin="none"
          style={{ gridArea: "issuer" }}
          value={certification.issuer}
          onChange={onInputChange}
          error={hasError && certification.issuer.length === 0}
          required
        />
        <DatePicker
          id={`issue-date-${certification.id}`}
          name="issueDate"
          label="Issue Date"
          margin="none"
          inputVariant="outlined"
          format="MMM yyyy"
          className="date"
          style={{ gridArea: "issue-date" }}
          value={certification.issueDate}
          onChange={handleDateChange("issueDate")}
          error={hasError && certification.issueDate === null}
          required
        />
        <FormControl style={{ gridArea: "has-expiry-date" }} variant="outlined">
          <InputLabel id={`has-expiry-date-label-${certification.id}`}>
            Will this expire?
          </InputLabel>
          <Select
            id={`has-expiry-date-${certification.id}`}
            name="hasExpiryDate"
            labelId={`has-expiry-date-label-${certification.id}`}
            label="Currently Working Here?"
            value={certification.hasExpiryDate}
            onChange={handleCheckbox}
            required
          >
            <MenuItem value="true">Yes</MenuItem>
            <MenuItem value="false">No</MenuItem>
          </Select>
        </FormControl>
        {certification.hasExpiryDate ? (
          <DatePicker
            id={`expiry-date-${certification.id}`}
            name="expiryDate"
            label="Expiry Date"
            margin="none"
            inputVariant="outlined"
            format="MMM yyyy"
            className="date"
            style={{ gridArea: "expiry-date" }}
            value={certification.expiryDate}
            onChange={handleDateChange("expiryDate")}
            error={hasError && certification.expiryDate === null}
            required
          />
        ) : null}
      </div>
    </div>
  );
}

export default CertificationItem;
