import React from "react";

function Header({ firstName, lastName, positionTitle }) {
  return (
    <div className="top-section">
      <div className="name">
        {firstName.length + lastName.length === 0 ? (
          <span className="first-name text-italic">Missing name</span>
        ) : null}
        <span className="first-name">{firstName}</span>
        <span className="last-name">{lastName}</span>
      </div>
      {positionTitle?.length > 0 ? (
        <div className="position-title">
          <span>{positionTitle}</span>
        </div>
      ) : null}
    </div>
  );
}

export default Header;
