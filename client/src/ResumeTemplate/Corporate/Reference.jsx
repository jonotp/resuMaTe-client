import React from "react";
import PageBreakableContainer from "../PageBreakableContainer";

function Reference({ referenceType, references }) {
  return (
    <section className="refrence">
      <div className="heading">References</div>
      <PageBreakableContainer>
        <span className="text-bold">References available upon request</span>
      </PageBreakableContainer>
    </section>
  );
}

export default Reference;
