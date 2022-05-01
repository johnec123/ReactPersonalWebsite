import { LinkedIn } from "@mui/icons-material";
import { Button } from "@mui/material";
import React, { Component } from "react";

export interface SocialLinkButtonProps {
  icon: any;
  linkTo: string;
}

const SocialLinkButton: React.FC<SocialLinkButtonProps> = ({
  icon,
  linkTo,
}) => {
  return (
    <Button target="_blank" href={linkTo} sx={{ color: "black" }}>
      {icon}
    </Button>
  );
};

export default SocialLinkButton;
