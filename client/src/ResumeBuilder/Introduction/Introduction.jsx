import React from "react";
import WithPageLoad from "../WithPageLoad.jsx";
import "./introduction.scss";

function Introduction({ templates, onSelect, onContinue }) {
  const handleClick = (template) => () => {
    onSelect(template);
    onContinue();
  };
  return (
    <div className="resume-builder-section introduction-section">
      <h1 className="resume-builder-heading">Introduction</h1>
      <div className="resume-builder-description">
        Before we get started, please select your desired resume template.
      </div>
      <div className="template-container">
        {templates.map((x) => (
          <img
            key={x.templateId}
            src={x.path}
            name={`template-${x.templateId}`}
            onClick={handleClick(x.templateId)}
          />
        ))}
      </div>
    </div>
  );
}

export default WithPageLoad(Introduction);
