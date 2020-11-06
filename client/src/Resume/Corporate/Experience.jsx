import React from "react";

function Experience({ experience }) {
  return (
    <div className="section experience">
      <div className="heading">
        <div className="sectiontitle">Experience</div>
      </div>
      {experience.map((x, i) => (
        <div className="paragraph" key={i}>
          <ExperienceItem {...x} />
        </div>))
      }
    </div >
  )
}

const dateFormatter = new Intl.DateTimeFormat("default", {
  year: "numeric",
  month: "short",
});

const ExperienceItem = ({ title, company, country, state, city, startDate, endDate, responsibilities }) => {
  const startDateFormatted = dateFormatter.format(new Date(startDate));
  const endDateFormatted = endDate !== null ? dateFormatter.format(new Date(endDate)) : "Present";
  return (
    <div className="singlecolumn">
      <span className="d-block">
        <span className="jobtitle d-block txtBold">{title}</span>
        <span className="txtItl">{company}</span><span><span>,
          </span></span><span className="jobcity txtItl">{city}</span><span>, </span>
        <span className="txtItl">{state}</span><span> / </span>
        <span className="txtItl">{startDateFormatted}</span><span>
          - </span>
        <span className="txtItl">{endDateFormatted}</span><br />
      </span>
      <div>
        <ul>
          {responsibilities.map((x, i) => (<li key={i}><span>{x}</span></li>))}
        </ul>
      </div>
      <span></span>
    </div>
  );
}

export default Experience;