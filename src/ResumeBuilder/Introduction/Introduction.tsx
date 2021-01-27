import React, { Dispatch } from "react";
import { ITemplate } from "../../Shared/Interfaces/Template.interface";
import WithPageLoad from "../WithPageLoad";
import "./introduction.scss";

interface IntroductionProps {
  templates: ITemplate[];
  onSelect: Dispatch<string>;
  onContinue: () => void;
}

function Introduction({ templates, onSelect, onContinue }: IntroductionProps) {
  const handleClick = (templateId: string) => () => {
    onSelect(templateId);
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
            onClick={handleClick(x.templateId)}
          />
        ))}
      </div>
    </div>
  );
}

export default WithPageLoad(Introduction);
