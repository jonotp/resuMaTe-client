import React from "react";
import { ICertificate } from "../../Shared/Interfaces/Resume.interface";
import PageBreakableContainer from "../PageBreakableContainer";

const dateFormatter = new Intl.DateTimeFormat("default", {
  year: "numeric",
  month: "short",
});

interface CertificationProps {
  certificates: ICertificate[];
}

function Certifications({ certificates }: CertificationProps) {
  return certificates.length > 0 ? (
    <section className="certifications">
      <div className="heading">Certifications</div>
      {certificates.map((x) => (
        <PageBreakableContainer key={x.id}>
          <div className="text-uppercase text-bold item-title">{x.issuer}</div>
          <div className="text-italic">
            {x.name} (
            {x.issueDate !== null
              ? dateFormatter.format(new Date(x.issueDate))
              : ""}
            {x.expiryDate !== null && x.hasExpiryDate
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
