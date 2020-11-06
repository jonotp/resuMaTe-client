import React from "react";

function Education({ education }) {
  return (
    <div className="section education">
      <div className="heading">
        <div className="sectiontitle">Education</div>
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

function EducationItem({ schoolName, program, mark, endDate }) {
  const endDateFormatted = endDate !== null ? dateFormatter.format(new Date(endDate)) : "Present";
  return (
    <div className="singlecolumn">
      <div>
        <span className="d-block txtBold eduDetails">
          <span className="d-block text-uppercase">{schoolName}</span>
          <span className="d-block">
            <span>{mark}</span>
          </span>
        </span>
        <span className="d-block txtItl" dependencyoncharvalue="EGRD_YES">
          <span>{program}</span><span> (</span><span className="jobdates" format="%b %Y">{endDateFormatted}</span><span>)</span>
        </span>
      </div>
      <span className="field"></span>
    </div>
  );
}

export default Education;