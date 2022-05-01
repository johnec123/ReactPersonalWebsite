import "./styles.css";

import {
  GitHub,
  Instagram,
  LinkedIn,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import React from "react";

const SideBar: React.FC = () => {
  return (
    <div className="sideBar">
      <LinkedIn />
      <Instagram />
      <GitHub />
      <Twitter />
      <YouTube />
    </div>
  );
};

export default SideBar;
