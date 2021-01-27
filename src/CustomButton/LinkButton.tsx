import React from "react";

interface LinkButtonProps {
  label: string;
  onClick: () => void;
}

function LinkButton({ label, onClick: handleClick }: LinkButtonProps) {
  return (
    <a className="custom-link-button" onClick={handleClick}>
      {label}
    </a>
  );
}

export default LinkButton;
