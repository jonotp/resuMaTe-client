import React from "react";

function Header({firstName, lastName, positionTitle}) {
  return (
    <div className="topsection">
      <div className="left-box">
        <div className="section firstsection">
          <div className="paragraph ">
            <div className="name txtBold">
              <span className="">{firstName}</span>
              <span className="">{lastName}</span>
            </div>
            <div className="position-title txtBold"><span>{positionTitle}</span></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;