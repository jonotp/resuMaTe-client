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
      <div className="scrollable">
        <div className="template-container">
          {templates.map((x) => (
            <img
              key={x.id}
              src={x.path}
              name={`template-${x.id}`}
              onClick={handleClick(x.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default WithPageLoad(Introduction);
