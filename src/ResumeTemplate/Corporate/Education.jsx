import React from "react";
import PageBreakableContainer from "../PageBreakableContainer";

function Education({ education }) {
  return (
    <section className="education">
      <div className="heading">Education</div>
      {education.length === 0 ? (
        <PageBreakableContainer>No formal education</PageBreakableContainer>
      ) : (
        education.map((x, i) => <EducationItem {...x} key={i} />)
      )}
    </section>
  );
}

const dateFormatter = new Intl.DateTimeFormat("default", {
  year: "numeric",
  month: "short",
});

function EducationItem({ schoolName, program, mark, completionDate }) {
  const completionDateFormatted =
    completionDate !== null
      ? dateFormatter.format(new Date(completionDate))
      : "Present";
  return (
    <PageBreakableContainer>
      <div className="text-bold">
        <div className="text-uppercase item-title">{schoolName}</div>
        <div>{mark}</div>
      </div>
      <div className="text-italic">
        {program} ({completionDateFormatted})
      </div>
    </PageBreakableContainer>
  );
}

export default Education;
