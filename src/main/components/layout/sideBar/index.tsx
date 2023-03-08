import "./styles.css";

import React from "react";
import SocialLinks from "../../socialLinks";

const SideBar: React.FC = () => {
  return (
    <div className="sideBar">
      <SocialLinks />
    </div>
  );
};

export default SideBar;
