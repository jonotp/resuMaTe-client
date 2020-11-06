import React from "react";
import Header from "./Header.jsx";
import Summary from "./Summary.jsx";
import Experience from "./Experience.jsx";
import Reference from "./Reference.jsx";
import Contact from "./Contact.jsx";
import Education from "./Education.jsx";
import Skills from "./Skills.jsx";
import "./corporate.scss";


function Corporate({ resume }) {

  return (
    <div className="corporate"
      >
      <Header firstName={resume.firstName} lastName={resume.lastName} positionTitle={resume.positionTitle} />
      <div className="parentContainer">
        <div className="left-box last-box">
          <Summary careerObjective={resume.careerObjective} />
          <Experience experience={resume.experience} />
          <Reference referenceType={resume.referenceType} references={resume.references} />
        </div>
        <div className="right-box last-box sidepane">
          <Contact address={resume.address} city={resume.city} state={resume.state} zipCode={resume.zipCode} email={resume.email} phone={resume.phone} />
          <Education education={resume.education} />
          <Skills skills={resume.skills} />
        </div>
      </div>
    </div>
  )
}

export default Corporate;