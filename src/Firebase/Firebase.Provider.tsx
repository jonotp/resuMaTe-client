import React, { PropsWithChildren } from "react";
import FirebaseContext from "./Firebase.Context";
import Firebase from "./Firebase";

const FirebaseProvider = ({ children }: PropsWithChildren<any>) => {
  return (
    <FirebaseContext.Provider value={new Firebase()}>
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseProvider;
