import React from "react";
import PageBreakableContainer from "../PageBreakableContainer";

interface SummaryProps {
  careerObjective?: string;
}

function Summary({ careerObjective }: SummaryProps) {
  return careerObjective !== undefined && careerObjective.length > 0 ? (
    <section className="summary">
      <div className="heading">Career Objective</div>
      <PageBreakableContainer>{careerObjective}</PageBreakableContainer>
    </section>
  ) : null;
}

export default Summary;
