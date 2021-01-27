import { createContext } from "react";
import Firebase from "./Firebase";

const FirebaseContext = createContext<Firebase>(new Firebase());

export default FirebaseContext;
