import React, { useEffect, useState } from "react";
import Corporate from "./Corporate/Corporate.jsx";
import "./resume-template-loader.scss";

function ResumeTemplateLoader({ resume, templateId }) {
  const [isMounted, setMounted] = useState(false);
  const [pages, setPages] = useState(1);

  const Template = () => {
    switch (templateId) {
      case 1:
        return <Corporate resume={resume} />;
      default:
        return <Corporate resume={resume} />;
    }
  };

  useEffect(() => {
    if (!isMounted) {
      setMounted(true);
      const resumeHeight = document
        .getElementsByClassName("resume")[0]
        .getBoundingClientRect().height;
      const a4Height = document
        .getElementsByClassName("hidden-a4")[0]
        .getBoundingClientRect().height;
      if (a4Height < resumeHeight) {
        const additionalPages = resumeHeight % a4Height === 0 ? 0 : 1;
        setPages(additionalPages + Math.floor(resumeHeight / a4Height));
      }
    }
  }, [isMounted]);

  return (
    <div className="resume-template-loader">
      <div className={`resume pages-${pages}`}>
        <Template />
      </div>
      <div className="hidden-a4"></div>
    </div>
  );
}

export default ResumeTemplateLoader;
