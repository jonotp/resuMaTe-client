import React from "react";

function Reference({ referenceType, references }) {
  return (
    <div className="section refrence">
      <div className="heading">
        <div className="section-title">References</div>
      </div>
      <div className="refr-wrapper">
        <div className="paragraph">
          <span className="text-bold">References available upon request</span>
        </div>
      </div>
    </div>
  )
}

export default Reference;