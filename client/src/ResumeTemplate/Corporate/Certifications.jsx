import React from "react";
import PageBreakableContainer from "../PageBreakableContainer";

const dateFormatter = new Intl.DateTimeFormat("default", {
  year: "numeric",
  month: "short",
});

function Certifications({ certificates }) {
  return certificates.length > 0 ? (
    <section className="certifications">
      <div className="heading">Certifications</div>
      {certificates.map((x) => (
        <PageBreakableContainer key={x.id}>
          <div className="text-uppercase text-bold item-title">{x.issuer}</div>
          <div className="text-italic">
            {x.name} ({dateFormatter.format(new Date(x.issueDate))}
            {x.hasExpiryDate
              ? ` - ${dateFormatter.format(new Date(x.expiryDate))}`
              : null}
            )
          </div>
        </PageBreakableContainer>
      ))}
    </section>
  ) : null;
}

export default Certifications;
