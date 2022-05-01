import "./styles.css";

import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

interface NavButtonProps {
  linkTo: any;
  buttonText: string;
}

const NavButton: React.FC<NavButtonProps> = ({ linkTo, buttonText }) => {
  return (
    <div className="navButton">
      <Button component={Link} to={linkTo} sx={{ color: "black" }}>
        {buttonText}
      </Button>
    </div>
  );
};

export default NavButton;
