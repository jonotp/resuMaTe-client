import React from "react";
import LinkButton from "../CustomButton/LinkButton";

function SignUpLink() {
  const handleClick = () => {
    console.log("Redirect to sign up page");
  };
  return <LinkButton label="Sign Up" onClick={handleClick} />;
}

export default SignUpLink;
