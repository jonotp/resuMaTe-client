import { Button } from "@material-ui/core";
import React, { useState } from "react";

function PageBreakableContainer({ children }) {
  const [hasPageBreak, setHasPageBreak] = useState(false);

  const handleClick = () => {
    setHasPageBreak(!hasPageBreak);
  };

  const classes = `container ${hasPageBreak ? "page-break-container" : ""}`;

  return (
    <div className={classes}>
      {children}
      <div className="page-break-adornment">
        <Button
          className="page-break-button"
          color="primary"
          margin="none"
          size="small"
          variant="contained"
          onClick={handleClick}
        >
          {hasPageBreak ? "Remove" : "Add"} Break
        </Button>
        <div className="page-break-divider" onClick={handleClick}></div>
      </div>
    </div>
  );
}

export default PageBreakableContainer;
