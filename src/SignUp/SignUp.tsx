import React, { FormEvent, useState, useContext } from "react";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import FirebaseContext from "../Firebase/Firebase.Context";
import { GreenButton } from "../CustomButton/GreenButton";
import PasswordRequirements from "./PasswordRequirement";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import VisibilityIcon from "@material-ui/icons/Visibility";
import SignInLinkDescription from "../SignIn/SignInLinkDescription";
import * as ROUTES from "../routes";
import { DefaultUser } from "../Shared/Interfaces/User.interface";
import { UseStateHelperFormInputChange } from "../Shared/Functions/UseStateHelper";
import "./sign-up.scss";

function SignUp() {
  const history = useHistory();
  const firebase = useContext(FirebaseContext);
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleChange = UseStateHelperFormInputChange(setUser);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      if (hasErrors()) throw "Error in fields";

      await firebase.signUp(
        {
          ...DefaultUser,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
        },
        user.password
      );

      history.push(ROUTES.RESUME_BUILDER_BASE);
    } catch (err) {
      console.error(err);
      setHasError(true);
    }
  };

  const hasErrors = () => {
    return (
      user.firstName.trim().length === 0 ||
      user.lastName.trim().length === 0 ||
      user.email.trim().match(/[\w-.]+\@[\w-.]+\.\w+/) === null ||
      user.password.match(/^(?=.*[A-Z])(?=.*\d)(?=.*[a-z]).{8,}$/) === null
    );
  };

  return (
    <div className="sign-up-section">
      <div className="form-container">
        <form noValidate onSubmit={handleSubmit}>
          <TextField
            id="first-name"
            name="firstName"
            label="First Name"
            variant="outlined"
            margin="none"
            style={{ gridArea: "first-name" }}
            value={user.firstName}
            onChange={handleChange}
            error={hasError && user.firstName.trim().length === 0}
            required
          />
          <TextField
            id="last-name"
            name="lastName"
            label="Last Name"
            variant="outlined"
            margin="none"
            style={{ gridArea: "last-name" }}
            value={user.lastName}
            onChange={handleChange}
            error={hasError && user.lastName.trim().length === 0}
            required
          />
          <TextField
            id="email"
            name="email"
            label="Email"
            variant="outlined"
            margin="none"
            style={{ gridArea: "email" }}
            value={user.email}
            onChange={handleChange}
            error={
              hasError && user.email.trim().match(/\w+\@\w+\.\w+/) === null
            }
            required
            helperText=""
          />
          <FormControl
            className={`text-input ${hasError ? "error" : ""}`}
            variant="outlined"
            style={{ gridArea: "password" }}
            fullWidth
          >
            <InputLabel htmlFor="password">Password</InputLabel>
            <OutlinedInput
              className={`text-input ${hasError ? "error" : ""}`}
              id="password"
              name="password"
              label="Password"
              type={showPassword ? "text" : "password"}
              value={user.password}
              onChange={handleChange}
              required
              error={
                hasError &&
                user.password.match(/^(?=.*[A-Z])(?=.*\d)(?=.*[a-z]).{8,}$/) ===
                  null
              }
              margin="none"
              fullWidth
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <div style={{ gridArea: "password-requirements" }}>
            <PasswordRequirements
              password={user.password}
              hasError={hasError}
            />
          </div>
          <GreenButton
            type="submit"
            variant="contained"
            color="primary"
            style={{ gridArea: "sign-up-button" }}
          >
            Sign Up
          </GreenButton>
        </form>
        <SignInLinkDescription />
      </div>
    </div>
  );
}

export default SignUp;
