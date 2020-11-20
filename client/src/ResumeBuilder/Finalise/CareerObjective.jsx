import React from "react";
import { TextField } from "@material-ui/core";

function CareerObjective({ careerObjective, onInputChange }) {
  return (
    <div className="card-container">
      <TextField
        id="career-objective"
        name="careerObjective"
        label="Career Objective"
        variant="outlined"
        margin="none"
        fullWidth
        multiline
        rows={4}
        rowsMax={10}
        style={{ gridArea: "career-objective" }}
        value={careerObjective}
        onChange={onInputChange}
      />
    </div>
  );
}

export default CareerObjective;
