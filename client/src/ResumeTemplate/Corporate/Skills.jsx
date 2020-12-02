import React from "react";

function Skills({ skills }) {
  return skills.length > 0 ? (
    <section className="skills">
      <div className="heading">Additional Skills</div>
      {skills.map((x, i) => (
        <div className="container" key={i}>
          {x}
        </div>
      ))}
    </section>
  ) : null;
}

export default Skills;
