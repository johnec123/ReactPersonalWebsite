import "./styles.css";
import React from "react";

import {
  Email,
  GitHub,
  Instagram,
  LinkedIn,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import { Button } from "@mui/material";
import SocialLinkButton from "../socialLinkButton";

const SocialLinks = () => {
  return (
    <div className="socialLinks">
      <SocialLinkButton
        icon={<LinkedIn />}
        linkTo="https://www.linkedin.com/in/johnecorry/"
      />
      <SocialLinkButton
        icon={<Instagram />}
        linkTo="https://www.instagram.com/john_corry/"
      />
      <SocialLinkButton
        icon={<GitHub />}
        linkTo="https://github.com/johnec123"
      />
      {/* <SocialLinkButton
        icon={<Twitter />}
        linkTo="linkedin.com/in/johnecorry"
      />
      <SocialLinkButton
        icon={<YouTube />}
        linkTo="linkedin.com/in/johnecorry"
      /> 
      <SocialLinkButton icon={<Email />} linkTo="johnecorry@gmail.com" />*/}
    </div>
  );
};

export default SocialLinks;
