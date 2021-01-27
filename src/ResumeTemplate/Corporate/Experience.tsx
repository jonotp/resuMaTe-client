import React from "react";
import { IExperience } from "../../Shared/Interfaces/Resume.interface";
import PageBreakableContainer from "../PageBreakableContainer";

interface ExperienceProps {
  experience: IExperience[];
}

function Experience({ experience }: ExperienceProps) {
  return (
    <section className="experience">
      <div className="heading">Experience</div>
      {experience.length === 0 ? (
        <PageBreakableContainer>
          No related work experience
        </PageBreakableContainer>
      ) : (
        experience.map((x, i) => <ExperienceItem {...x} key={i} />)
      )}
    </section>
  );
}

const dateFormatter = new Intl.DateTimeFormat("default", {
  year: "numeric",
  month: "short",
});

const ExperienceItem = ({
  title,
  company,
  location,
  startDate,
  endDate,
  responsibilities,
}: IExperience) => {
  const startDateFormatted = startDate !== null ? dateFormatter.format(new Date(startDate)) : "No start date";
  const endDateFormatted =
    endDate !== null ? dateFormatter.format(new Date(endDate)) : "Present";
  return (
    <PageBreakableContainer>
      <div className="text-bold text-uppercase item-title">{title}</div>
      <div className="text-italic">
        {company}
        {location.trim().length !== 0 ? `, ${location}` : null},{" "}
        {startDateFormatted} - {endDateFormatted}
      </div>
      <ul>
        {responsibilities.split("\n\n").map((x, i) => (
          <li key={i}>{x}</li>
        ))}
      </ul>
    </PageBreakableContainer>
  );
};

export default Experience;
