import React from "react";

const dateFormatter = new Intl.DateTimeFormat("default", {
  year: "numeric",
  month: "short",
});

function Certifications({ certificates }) {
  return certificates.length > 0 ? (
    <section className="certifications">
      <div className="heading">Certifications</div>
      {certificates.map((x) => (
        <div className="container" key={x.id}>
          <div className="text-uppercase text-bold item-title">{x.issuer}</div>
          <div className="text-italic">
            {x.name} ({dateFormatter.format(new Date(x.issueDate))}
            {x.hasExpiryDate
              ? ` - ${dateFormatter.format(new Date(x.expiryDate))}`
              : null}
            )
          </div>
        </div>
      ))}
    </section>
  ) : null;
}

export default Certifications;
