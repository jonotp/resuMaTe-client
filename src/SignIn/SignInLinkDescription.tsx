import React from "react";
import SignInLink from "./SignInLink";
import "./sign-in.scss";

function SignInLinkDescription() {
  return (
    <div className="sign-in-link-description">
      <span className="description">Have an account?</span>
      <SignInLink />
    </div>
  );
}

export default SignInLinkDescription;
