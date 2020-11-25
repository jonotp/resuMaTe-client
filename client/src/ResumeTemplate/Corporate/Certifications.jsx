import React from "react";

const dateFormatter = new Intl.DateTimeFormat("default", {
  year: "numeric",
  month: "short",
});

function Certifications({ certificates }) {
  return certificates.length > 0 ? (
    <div className="section certifications">
      <div className="heading">
        <div className="section-title">Certifications</div>
      </div>
      {certificates.map((x) => (
        <div className="paragraph" key={x.id}>
          <div className="container">
            <span className="d-block text-uppercase text-bold item-title">{x.issuer}</span>
            <p className="text-italic">
              {x.name} ({dateFormatter.format(new Date(x.issueDate))}
              {x.hasExpiryDate
                ? ` - ${dateFormatter.format(new Date(x.expiryDate))}`
                : null}
              )
            </p>
          </div>
        </div>
      ))}
    </div>
  ) : null;
}

export default Certifications;
