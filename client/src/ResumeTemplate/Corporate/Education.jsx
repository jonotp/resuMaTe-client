import React from "react";

function Education({ education }) {
  return (
    <div className="section education">
      <div className="heading">
        <div className="section-title">Education</div>
      </div>
      {education.map((x, i) => (
        <div className="paragraph" key={i}>
          <EducationItem  {...x} />
        </div>))}
    </div>
  );
}

const dateFormatter = new Intl.DateTimeFormat("default", {
  year: "numeric",
  month: "short",
});

function EducationItem({ schoolName, program, mark, completionDate }) {
  const completionDateFormatted = completionDate !== null ? dateFormatter.format(new Date(completionDate)) : "Present";
  return (
    <div className="container">
      <div>
        <span className="d-block text-bold">
          <span className="d-block text-uppercase item-title">{schoolName}</span>
          <span className="d-block">
            <span>{mark}</span>
          </span>
        </span>
        <span className="d-block text-italic" dependencyoncharvalue="EGRD_YES">
          <span>{program}</span><span> (</span><span className="jobdates" format="%b %Y">{completionDateFormatted}</span><span>)</span>
        </span>
      </div>
      <span className="field"></span>
    </div>
  );
}

export default Education;