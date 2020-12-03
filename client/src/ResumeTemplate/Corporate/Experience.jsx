import React from "react";
import PageBreakableContainer from "../PageBreakableContainer";

function Experience({ experience }) {
  return (
    <section className="experience">
      <div className="heading">Experience</div>
      {experience.map((x, i) => (
        <ExperienceItem {...x} key={i} />
      ))}
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
}) => {
  const startDateFormatted = dateFormatter.format(new Date(startDate));
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
