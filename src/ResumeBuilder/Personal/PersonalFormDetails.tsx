import React, { ChangeEvent, useState } from "react";
import { Divider, IconButton, TextField } from "@material-ui/core";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { IPersonal } from "../../Shared/Interfaces/Resume.interface";

interface PersonalFormDetailsProps {
  applicant: IPersonal;
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  hasError: boolean;
}

function PersonalFormDetails({
  applicant,
  onInputChange,
  hasError,
}: PersonalFormDetailsProps) {
  const [showForm, setShowForm] = useState(true);

  const applicantName =
    applicant.firstName.trim().length + applicant.lastName.trim().length === 0
      ? "Missing name"
      : `${applicant.firstName} ${applicant.lastName}`;

  const applicantPosition =
    applicant.positionTitle.trim().length === 0
      ? "Missing position"
      : applicant.positionTitle;

  const applicantAddress =
    applicant.address.trim().length === 0
      ? "Missing address"
      : applicant.address;

  const applicantEmail =
    applicant.email.trim().length === 0 ? "Missing email" : applicant.email;

  const applicantPhone =
    applicant.phone.trim().length === 0 ? "Missing phone" : applicant.phone;

  const applicantCareerObjective =
    applicant.careerObjective?.trim().length === 0 ? null : (
      <>
        <p className="summary-title-adornment summary-title">
          Career Objective
        </p>
        <p>{applicant.careerObjective}</p>
      </>
    );

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
      </div>
      {/* Summary fields */}
      <div className="summary">
        <p className="summary-title">
          {applicantName} ({applicantPosition})
        </p>
        <p>{applicantAddress}</p>
        <p>{applicantEmail}</p>
        <p>{applicantPhone}</p>
        {applicantCareerObjective}
      </div>

      {/* Form */}
      <div className="resume-form-fields">
        <TextField
          id={`first-name`}
          name="firstName"
          label="First Name"
          variant="outlined"
          margin="none"
          style={{ gridArea: "first-name" }}
          value={applicant.firstName}
          onChange={onInputChange}
          error={hasError && applicant.firstName.length === 0}
          required
        />
        <TextField
          id={`last-name`}
          name="lastName"
          label="Last Name"
          variant="outlined"
          margin="none"
          style={{ gridArea: "last-name" }}
          value={applicant.lastName}
          onChange={onInputChange}
        />
        <TextField
          id={`address`}
          name="address"
          label="Address"
          variant="outlined"
          margin="none"
          style={{ gridArea: "address" }}
          value={applicant.address}
          onChange={onInputChange}
          required
          error={hasError && applicant.address.length === 0}
          placeholder="Street Address, City, State"
        />
        <TextField
          id={`email`}
          name="email"
          label="Email"
          variant="outlined"
          margin="none"
          style={{ gridArea: "email" }}
          value={applicant.email}
          onChange={onInputChange}
          error={hasError && applicant.email.length === 0}
          required
        />
        <TextField
          id={`phone`}
          name="phone"
          label="Phone"
          variant="outlined"
          margin="none"
          style={{ gridArea: "phone" }}
          value={applicant.phone}
          onChange={onInputChange}
          error={hasError && applicant.phone.length === 0}
          required
        />
        <TextField
          id={`website`}
          name="website"
          label="Website"
          variant="outlined"
          margin="none"
          style={{ gridArea: "website" }}
          value={applicant.website}
          onChange={onInputChange}
        />
        <Divider style={{ gridArea: "divider" }} variant="middle" />
        <TextField
          id={`position-title`}
          name="positionTitle"
          label="Position"
          variant="outlined"
          margin="none"
          style={{ gridArea: "position-title" }}
          value={applicant.positionTitle}
          onChange={onInputChange}
          error={hasError && applicant.positionTitle.length === 0}
          required
        />
        <TextField
          id="career-objective"
          name="careerObjective"
          label="Career Objective"
          variant="outlined"
          margin="none"
          fullWidth
          multiline
          rows={3}
          rowsMax={10}
          style={{ gridArea: "career-objective" }}
          value={applicant.careerObjective}
          onChange={onInputChange}
        />
      </div>
    </div>
  );
}

export default PersonalFormDetails;
