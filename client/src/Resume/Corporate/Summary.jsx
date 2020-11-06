import React from "react";

function Summary({ careerObjective }) {
  return (
    <div className="section summary">
      <div className="heading">
        <div className="sectiontitle">Career Objective</div>
      </div>
      <div className="paragraph">
        <div className="field singlecolumn">{careerObjective}</div>
      </div>
    </div>
  )
}

export default Summary;