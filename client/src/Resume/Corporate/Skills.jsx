import React from "react";

function Skills({ skills }) {
  return (
    <div className="section skills">
      <div className="heading">
        <div className="sectiontitle">Additional Skills</div>
      </div>
      {skills.map((x,i) => (
        <div className="paragraph" key={i}>
          <div className="singlecolumn maincolumn">
            <span>
              <p>{x}</p>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skills;