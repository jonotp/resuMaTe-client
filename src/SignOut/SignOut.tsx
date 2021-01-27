import React, { useContext } from "react";
import MenuButton from "../CustomButton/MenuButton";
import FirebaseContext from "../Firebase/Firebase.Context";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const SignOutButton = () => {
  const firebase = useContext(FirebaseContext);

  const handleClick = async () => {
    try {
      await firebase?.signOut();
    } catch (error) {
      console.error(error);
    }
  };
  return <span onClick={handleClick}>Sign out</span>;
};

export default MenuButton(SignOutButton, ExitToAppIcon);
