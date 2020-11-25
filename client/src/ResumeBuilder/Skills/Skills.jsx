import React, { useState } from "react";
import WithPageLoad from "../WithPageLoad.jsx";
import { GreenButton } from "../../CustomButton/GreenButton.jsx";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { AddButton } from "../../CustomButton/AddButton";
import ListItem from "../ListItem.jsx";

function Skills({ state, setState, onContinue }) {
  const [hasError, setHasError] = useState(false);

  const handleAdd = () => {
    setState((prev) => prev.concat(""));
  };

  const handleChange = (index) => (event) => {
    setState((prev) =>
      prev.map((x, i) => (i === index ? event.target.value : x))
    );
  };

  const handleDelete = (index) => () => {
    setState((prev) => prev.filter((x, i) => i !== index));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validate()) return;
    onContinue();
  };

  const validate = () => {
    const isValid = !state.some((x) => x.trim().length === 0);

    setHasError(!isValid);
    return isValid;
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="resume-builder-section certification-section"
    >
      <h1 className="resume-builder-heading">Skills</h1>
      <div className="resume-builder-description">Include relevant skills</div>
      {state.map((x, i) => (
        <div className="card-container" key={i}>
          <ListItem
            id={i}
            name="Skill"
            index={i}
            value={x}
            handleChange={handleChange(i)}
            handleDelete={handleDelete(i)}
            hasError={hasError}
          />
        </div>
      ))}
      <AddButton
        onClick={handleAdd}
        variant="text"
        color="primary"
        startIcon={<AddCircleOutlineIcon />}
      >
        Add skill
      </AddButton>
      <GreenButton type="submit" variant="contained" color="primary">
        Continue
      </GreenButton>
    </form>
  );
}

export default WithPageLoad(Skills);
