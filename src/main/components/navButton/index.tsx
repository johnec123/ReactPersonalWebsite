import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

interface NavButtonProps {
  linkTo: any;
  buttonText: string;
}

const NavButton: React.FC<NavButtonProps> = ({ linkTo, buttonText }) => {
  return (
    <Button component={Link} to={linkTo} variant="contained">
      {buttonText}
    </Button>
  );
};

export default NavButton;
