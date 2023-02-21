import "./styles.css";

import React from "react";
import NavButton from "../../navButton";

const NavBar: React.FC = () => {
  return (
    <nav className="navBar-wrapper">
      <div className="navBar-leftSide">
        <NavButton linkTo="/" buttonText="Home." />
      </div>
      <div className="navBar-rightSide">
        <NavButton linkTo="projects" buttonText="Projects." />
        <NavButton linkTo="me" buttonText="Me." />
        <NavButton linkTo="get-in-touch" buttonText="Get In Touch." />
      </div>
    </nav>
  );
};

export default NavBar;
