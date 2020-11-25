import React from "react";

function Experience({ experience }) {
  return (
    <div className="section experience">
      <div className="heading">
        <div className="section-title">Experience</div>
      </div>
      {experience.map((x, i) => (
        <div className="paragraph" key={i}>
          <ExperienceItem {...x} />
        </div>
      ))}
    </div>
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
    <div className="container">
      <span className="d-block">
        <span className="job-title d-block text-bold item-title">{title}</span>
        <span className="text-italic">
          {company}
          {location.trim().length !== 0 ? `, ${location}` : null},{" "}
          {startDateFormatted} - {endDateFormatted}
        </span>
        <br />
      </span>
      <div>
        <ul>
          {responsibilities.split("\n\n").map((x, i) => (
            <li key={i}>
              <span>{x}</span>
            </li>
          ))}
        </ul>
      </div>
      <span></span>
    </div>
  );
};

export default Experience;
