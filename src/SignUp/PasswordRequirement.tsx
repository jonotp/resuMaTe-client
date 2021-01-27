import React from "react";

interface PasswordRequirementsProp {
  password: string;
  hasError: boolean;
}

function PasswordRequirements({
  password,
  hasError,
}: PasswordRequirementsProp) {
  const lowercaseError = hasError && password.match(/[a-z]/) === null;
  const uppercaseError = hasError && password.match(/[A-Z]/) === null;
  const numberError = hasError && password.match(/\d/) === null;
  const characterLimitError = hasError && password.match(/.{8,}/) === null;

  return (
    <ul className="password-requirements">
      <li className={lowercaseError ? "error" : ""}>One lowercase character</li>
      <li className={uppercaseError ? "error" : ""}>One uppercase character</li>
      <li className={numberError ? "error" : ""}>One number</li>
      <li className={characterLimitError ? "error" : ""}>
        8 characters minimum
      </li>
    </ul>
  );
}

export default PasswordRequirements;
