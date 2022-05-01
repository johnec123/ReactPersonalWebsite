import "./styles.css";

import React from "react";
import SocialLinks from "../../socialLinks";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <p className="footer-text">Designed & Developed by J. Corry 2022</p>
      <SocialLinks />
    </div>
  );
};

export default Footer;
