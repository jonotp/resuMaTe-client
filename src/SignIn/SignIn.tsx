import React, { ChangeEvent, FormEvent, useState, useContext } from "react";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import FirebaseContext from "../Firebase/Firebase.Context";
import { GreenButton } from "../CustomButton/GreenButton";
import EmailIcon from "@material-ui/icons/Email";
import LockIcon from "@material-ui/icons/Lock";
import SignUpLinkDescription from "../SignUp/SignUpLinkDescription";
import * as ROUTES from "../routes";
import "./sign-in.scss";

function SignIn() {
  const history = useHistory();
  const firebase = useContext(FirebaseContext);
  const [user, setUser] = useState({ username: "", password: "" });
  const [hasError, setHasError] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    console.log("In handle submit");
    try {
      await firebase.signIn(user.username, user.password);
      history.push(ROUTES.RESUME_BUILDER_BASE);
    } catch (err) {
      console.error(err);
      setHasError(true);
    }
  };

  return (
    <div className="sign-in-section">
      <div className="form-container">
        <form noValidate onSubmit={handleSubmit}>
          <FormControl
            className={`text-input ${hasError ? "error" : ""}`}
            variant="outlined"
            fullWidth
          >
            <InputLabel htmlFor="username">Username</InputLabel>
            <OutlinedInput
              className={`text-input ${hasError ? "error" : ""}`}
              id="username"
              name="username"
              label="Username"
              value={user.username}
              onChange={handleChange}
              required
              error={hasError}
              margin="none"
              fullWidth
              startAdornment={
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl
            className={`text-input ${hasError ? "error" : ""}`}
            variant="outlined"
            fullWidth
          >
            <InputLabel htmlFor="password">Password</InputLabel>
            <OutlinedInput
              id="password"
              name="password"
              label="Password"
              type="password"
              value={user.password}
              onChange={handleChange}
              required
              error={hasError}
              margin="none"
              fullWidth
              startAdornment={
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              }
            />
          </FormControl>
          <GreenButton type="submit" variant="contained" color="primary">
            Sign In
          </GreenButton>
        </form>
        <SignUpLinkDescription />
      </div>
    </div>
  );
}

export default SignIn;
