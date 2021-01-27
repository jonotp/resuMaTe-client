import React from "react";
import SignUpLink from "./SignUpLink";
import "./sign-up.scss";

function SignUpLinkDescription() {
  return (
    <div className="sign-up-link-description">
      <span className="description">Don't have an account?</span>
      <SignUpLink />
    </div>
  );
}

export default SignUpLinkDescription;
