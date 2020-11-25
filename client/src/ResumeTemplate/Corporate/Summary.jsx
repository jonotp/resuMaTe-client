import React from "react";

function Summary({ careerObjective }) {
  return careerObjective?.length > 0 ? (
    <div className="section summary">
      <div className="heading">
        <div className="section-title">Career Objective</div>
      </div>
      <div className="paragraph">
        <div className="field container">{careerObjective}</div>
      </div>
    </div>
  ) : null;
}

export default Summary;
