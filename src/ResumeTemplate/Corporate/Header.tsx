import React from "react";

interface HeaderProp {
  firstName: string;
  lastName: string;
  position?: string;
}

function Header({ firstName, lastName, position }: HeaderProp) {
  return (
    <div className="top-section">
      <div className="name">
        {firstName.length + lastName.length === 0 ? (
          <span className="first-name text-italic">Missing name</span>
        ) : null}
        <span className="first-name">{firstName}</span>
        <span className="last-name">{lastName}</span>
      </div>
      {position !== undefined && position.length > 0 ? (
        <div className="position-title">
          <span>{position}</span>
        </div>
      ) : null}
    </div>
  );
}

export default Header;
