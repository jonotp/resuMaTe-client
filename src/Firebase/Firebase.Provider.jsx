import React from "react";
import FirebaseContext from "./Firebase.Context";
import Firebase from "./firebase";

const FirebaseProvider = ({ children }) => {
  return (
    <FirebaseContext.Provider value={new Firebase()}>
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseProvider;
