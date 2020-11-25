import React, { useEffect, useState } from "react";
import Corporate from "./Corporate/Corporate.jsx";
import "./resume-template-loader.scss";

function ResumeTemplateLoader({ resume }) {
  const [isMounted, setMounted] = useState(false);
  useEffect(() => {
    if (!isMounted) {
      setMounted(true);
      // ManuallyAddPageBreak();
      // AddHeightToSidePane();
    }
  }, [isMounted]);
  return (
    <div className="resume">
      <Corporate resume={resume} />
    </div>
  );
}

const pageHeight = 1123;

function AddHeightToSidePane() {
  const sidepane = document.getElementsByClassName("sidepane")[0];
  if (sidepane === undefined) return;

  const parentTop = document
    .getElementsByClassName("resume")[0]
    .getBoundingClientRect().top;
  const rect = sidepane.getBoundingClientRect();
  const top = rect.top;
  const bottom = rect.bottom;
  var newPageHeight = pageHeight;
  while (bottom > newPageHeight) {
    newPageHeight += pageHeight;
  }

  const newHeight = newPageHeight - top + parentTop;
  sidepane.style.height = newHeight + "px";
}

function ManuallyAddPageBreak() {
  if (
    document.getElementsByTagName("body")[0].getBoundingClientRect().bottom <
    pageHeight
  )
    return;
  var experience = document.getElementsByClassName("experience")[0];
  console.log(experience.getBoundingClientRect());
  if (experience.getBoundingClientRect().bottom > pageHeight) {
    var paragraphs = experience.getElementsByClassName("paragraph");
    var paragraph = GetBrokenElement(paragraphs, pageHeight);
    var listItems = paragraph.getElementsByTagName("li");
    var brokenListItem = GetBrokenElement(listItems, pageHeight);
    BreakPageBeforeElement(brokenListItem);
  } else {
    var sections = document.getElementsByClassName("section");
    var brokenSection = GetBrokenElement(sections, pageHeight);
    BreakPageBeforeElement(brokenSection);
  }
}

function GetBrokenElement(elements, pageHeight) {
  for (var i = 0; i < elements.length; i++) {
    if (elements[i].getBoundingClientRect().bottom > pageHeight) {
      return elements[i];
    }
  }
}

function BreakPageBeforeElement(element) {
  if (element === undefined) return;
  const top = element.getBoundingClientRect().top;
  const margin = pageHeight - top + 24;

  element.style.marginTop = margin + "px";
}

export default ResumeTemplateLoader;
