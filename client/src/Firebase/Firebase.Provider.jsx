import React, { createContext } from "react";
import Firebase from "./firebase";

const FirebaseContext = createContext(null);
const FirebaseProvider = ({ children }) => {
  return (
    <FirebaseContext.Provider value={new Firebase()}>
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseProvider;
