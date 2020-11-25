import React from "react";

function Header({ firstName, lastName, positionTitle }) {
  return (
    <div className="top-section">
      <div className="left-box">
        <div className="section first-section">
          <div className="paragraph ">
            <div className="name text-bold">
              <span className="first-name">{firstName}</span>
              <span className="last-name">{lastName}</span>
            </div>
            {positionTitle?.length > 0 ? (
              <div className="position-title text-bold">
                <span>{positionTitle}</span>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
