import { Dispatch, createContext } from "react";

const AuthenticationContext = createContext<{
  auth: any,
  setAuth: Dispatch<any>
}>({
  auth:  null,
  setAuth: () => null,
})

export default AuthenticationContext;
