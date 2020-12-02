import React from "react";

function Summary({ careerObjective }) {
  return careerObjective?.length > 0 ? (
    <section className="summary">
      <div className="heading">Career Objective</div>
      <div className="container">{careerObjective}</div>
    </section>
  ) : null;
}

export default Summary;
