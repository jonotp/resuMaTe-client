import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import MenuButton from "../CustomButton/MenuButton";

const ProfileButton = () => {
  const handleClick = async () => {
    console.log("Navigate to user profile");
  };
  return <span onClick={handleClick}>Profile</span>;
};

export default MenuButton(ProfileButton, PersonIcon);
