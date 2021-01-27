import React from "react";
import PageBreakableContainer from "../PageBreakableContainer";

function Summary({ careerObjective }) {
  return careerObjective?.length > 0 ? (
    <section className="summary">
      <div className="heading">Career Objective</div>
      <PageBreakableContainer>{careerObjective}</PageBreakableContainer>
    </section>
  ) : null;
}

export default Summary;
