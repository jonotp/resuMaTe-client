import React from "react";
import WithPageLoad from "../WithPageLoad";
import { GreenButton } from "../../CustomButton/GreenButton";
import ResumeTemplateLoader from "../../ResumeTemplate/ResumeTemplateLoader";
import "./finalise.scss";

function Finalise({ templateId, resume }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const oldTitle = document.title;
    document.title = `${state.firstName} ${state.lastName} - Resume`
    window.print();
    document.title = oldTitle;
  };

  return (
    <div className="resume-builder-section finalise-section">
      <h1 className="resume-builder-heading">Finalise</h1>
      <div className="resume-builder-description">
        Review your information and click the finalise button to save your
        resume as a pdf
      </div>
      <div className="resume-preview">
        <ResumeTemplateLoader resume={resume} templateId={templateId} />
      </div>
      <GreenButton
        type="submit"
        variant="contained"
        color="primary"
        onClick={handleSubmit}
      >
        Finalise
      </GreenButton>
    </div>
  );
}

export default WithPageLoad(Finalise);
