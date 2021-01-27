import React from "react";
import { useHistory } from "react-router";
import LinkButton from "../CustomButton/LinkButton";
import * as ROUTES from "../routes";

function SignInLink() {
  const history = useHistory();
  const handleClick = () => {
    history.push(ROUTES.SIGN_IN);
  };
  return <LinkButton label="Sign In" onClick={handleClick} />;
}

export default SignInLink;
