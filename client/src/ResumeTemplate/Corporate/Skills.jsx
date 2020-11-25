import React from "react";

function Skills({ skills }) {
  return skills.length > 0 ? (
    <div className="section skills">
      <div className="heading">
        <div className="section-title">Additional Skills</div>
      </div>
      {skills.map((x, i) => (
        <div className="paragraph" key={i}>
          <div className="container">
            <span>
              <p>{x}</p>
            </span>
          </div>
        </div>
      ))}
    </div>
  ) : null;
}

export default Skills;
