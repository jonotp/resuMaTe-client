import React from "react";
import Header from "./Header";
import Summary from "./Summary";
import Experience from "./Experience";
import Reference from "./Reference";
import Contact from "./Contact";
import Education from "./Education";
import Skills from "./Skills";
import Certifications from "./Certifications";
import "./corporate.scss";

function Corporate({ resume }) {
  return (
    <div className="corporate">
      <Header
        firstName={resume.firstName}
        lastName={resume.lastName}
        positionTitle={resume.positionTitle}
      />
      <div className="corporate-body">
        <div className="left-pane">
          <Summary careerObjective={resume.careerObjective} />
          <Experience experience={resume.experience} />
          <Reference
            referenceType={resume.referenceType}
            references={resume.references}
          />
        </div>
        <div className="right-pane">
          <Contact
            address={resume.address}
            email={resume.email}
            phone={resume.phone}
            website={resume.website}
          />
          <Education education={resume.education} />
          <Certifications certificates={resume.certificates} />
          <Skills skills={resume.skills} />
        </div>
      </div>
    </div>
  );
}

export default Corporate;
