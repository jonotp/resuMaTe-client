import React from "react";
import { IEducation } from "../../Shared/Interfaces/Resume.interface";
import PageBreakableContainer from "../PageBreakableContainer";

interface EducationProps {
  education: IEducation[];
}

function Education({ education }: EducationProps) {
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

function EducationItem({
  schoolName,
  program,
  mark,
  completionDate,
}: IEducation) {
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
