import React, { FormEvent, useState } from "react";
import WithPageLoad from "../WithPageLoad";
import { GreenButton } from "../../CustomButton/GreenButton";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { AddButton } from "../../CustomButton/AddButton";
import CertificationItem from "./CertificationItem";
import "./certifications.scss";
import {
  DefaultCertificate,
  ICertificate,
} from "../../Shared/Interfaces/Certificate.interface";
import { ResumeBuilderSectionProps } from "../../Shared/Interfaces/ResumeBuilder.interface";
import {
  UseStateHelperArrayElementIDAdd,
  UseStateHelperArrayElementIDChange,
  UseStateHelperArrayElementIDDelete,
  UseStateHelperArrayElementIDInputChange,
} from "../../Shared/Functions/UseStateHelper";

function Certifications({
  state,
  setState,
  onContinue,
}: ResumeBuilderSectionProps<ICertificate[]>) {
  const [hasError, setHasError] = useState(false);

  const handleAdd = UseStateHelperArrayElementIDAdd(setState)(
    DefaultCertificate
  );
  const handleDelete = UseStateHelperArrayElementIDDelete(setState);
  const handleInputChange = UseStateHelperArrayElementIDInputChange(setState);
  const handleChange = UseStateHelperArrayElementIDChange(setState);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!validate()) return;
    onContinue();
  };

  const validate = () => {
    const isValid = !state.some(
      (x) =>
        x.issueDate === null ||
        x.name.trim().length === 0 ||
        x.issuer.trim().length === 0 ||
        (x.hasExpiryDate ? x.expiryDate === null : false)
    );

    setHasError(!isValid);
    return isValid;
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="resume-builder-section certifications-section"
    >
      <h1 className="resume-builder-heading">Certifications</h1>
      <div className="resume-builder-description">
        Add any relevant certificates, qualifications or awards
      </div>
      {state.map((x) => (
        <CertificationItem
          key={x.id}
          certification={x}
          onInputChange={handleInputChange(x.id)}
          onChange={handleChange(x.id)}
          onDelete={handleDelete(x.id)}
          hasError={hasError}
        />
      ))}
      <AddButton
        onClick={handleAdd}
        variant="text"
        color="primary"
        startIcon={<AddCircleOutlineIcon />}
      >
        Add certificates
      </AddButton>
      <GreenButton type="submit" variant="contained" color="primary">
        Continue
      </GreenButton>
    </form>
  );
}

export default WithPageLoad(Certifications);
