import React, { useState } from "react";
import {
  Divider,
  IconButton,
  TextField,
} from "@material-ui/core";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { GreenButton } from "../../CustomButton/GreenButton";
import "./finalise.scss";

function FinaliseFormDetails({ applicant, onInputChange, hasError }) {
  const [showForm, setShowForm] = useState(true);
  const [showMore, setShowMore] = useState(false);

  const applicantName =
    applicant.firstName.trim().length + applicant.lastName.trim().length === 0
      ? "Missing name"
      : `${applicant.firstName} ${applicant.lastName}`;

  const applicantPosition =
    applicant.positionTitle.trim().length === 0
      ? "Missing position"
      : applicant.positionTitle;

  const applicantEmail =
    applicant.email.trim().length === 0 ? "Missing email" : applicant.email;

  const applicantPhone =
    applicant.phone.trim().length === 0 ? "Missing phone" : applicant.phone;

  return (
    <div>
      <div className={showForm ? "card-container active" : "card-container"}>
        {/* Header */}
        <div className="card-header">
          {showForm ? (
            <IconButton
              aria-label="dropdown"
              onClick={() => setShowForm(false)}
            >
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
          <p>{applicantEmail}</p>
          <p>{applicantPhone}</p>
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
          <Divider style={{ gridArea: "divider" }} variant="middle" />
          <div
            className={`${showMore ? "active" : ""} additional-form-fields`}
            style={{ gridArea: "addition-fields" }}
          >
            <TextField
              id={`address`}
              name="address"
              label="Address"
              variant="outlined"
              margin="none"
              style={{ gridArea: "address" }}
              value={applicant.address}
              onChange={onInputChange}
            />
            <TextField
              id={`country`}
              name="country"
              label="Country"
              variant="outlined"
              margin="none"
              style={{ gridArea: "country" }}
              value={applicant.country}
              onChange={onInputChange}
            />
            <TextField
              id={`state`}
              name="state"
              label="State"
              variant="outlined"
              margin="none"
              style={{ gridArea: "state" }}
              value={applicant.state}
              onChange={onInputChange}
            />
            <TextField
              id={`zip-code`}
              name="zipCode"
              label="Zip Code"
              variant="outlined"
              margin="none"
              style={{ gridArea: "zip-code" }}
              value={applicant.zipCode}
              onChange={onInputChange}
            />
            <TextField
              id={`city`}
              name="city"
              label="City"
              variant="outlined"
              margin="none"
              style={{ gridArea: "city" }}
              value={applicant.city}
              onChange={onInputChange}
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
    </div>
  );
}

export default FinaliseFormDetails;
