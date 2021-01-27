import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import WithPageLoad from "../WithPageLoad.jsx";
import { GreenButton } from "../../CustomButton/GreenButton.jsx";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { AddButton } from "../../CustomButton/AddButton";
import CertificationItem from "./CertificationItem";
import "./certifications.scss";

const defaultCertificate = {
  name: "",
  issuer: "",
  issueDate: null,
  hasExpiryDate: false,
  expiryDate: null,
};

function Certifications({ state, setState, onContinue }) {
  const [hasError, setHasError] = useState(false);

  const handleAdd = () => {
    setState((prev) =>
      prev.concat({
        id: uuidv4(),
        ...defaultCertificate,
      })
    );
  };

  const handleDelete = (id) => {
    setState((prev) => prev.filter((x) => x.id !== id));
  };

  const handleEventChange = (id) => (event) => {
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

  const handleChange = (id) => (property, value) => {
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
          onInputChange={handleEventChange(x.id)}
          onChange={handleChange(x.id)}
          onDelete={handleDelete}
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