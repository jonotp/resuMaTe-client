import { Dispatch, createContext } from "react";

const AuthenticationContext = createContext<{
  auth: firebase.default.User | null
  setAuth: Dispatch<any>
}>({
  auth:  null,
  setAuth: () => null,
})

export default AuthenticationContext;
