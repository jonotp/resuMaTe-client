import React from "react";
import { useState } from "react";
import AuthenticationContext from "./Authentication.Context";

const AuthenticationProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  return (
    <AuthenticationContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationProvider;
