import React from "react";
import { useHistory } from "react-router";
import LinkButton from "../CustomButton/LinkButton";
import * as ROUTES from "../routes";

function SignUpLink() {
  const history = useHistory();
  const handleClick = () => {
    history.push(ROUTES.SIGN_UP);
  };
  return <LinkButton label="Sign Up" onClick={handleClick} />;
}

export default SignUpLink;
