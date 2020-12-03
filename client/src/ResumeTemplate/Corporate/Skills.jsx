import React from "react";
import PageBreakableContainer from "../PageBreakableContainer";

function Skills({ skills }) {
  return skills.length > 0 ? (
    <section className="skills">
      <div className="heading">Additional Skills</div>
      {skills.map((x, i) => (
        <PageBreakableContainer key={i}>{x}</PageBreakableContainer>
      ))}
    </section>
  ) : null;
}

export default Skills;
