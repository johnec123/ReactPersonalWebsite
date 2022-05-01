import React from "react";
import NavButton from "../../navButton";

const NavBar: React.FC = () => {
  return (
    <nav>
      <NavButton linkTo="/" buttonText="John." />
      <NavButton linkTo="work" buttonText="Work" />
      <NavButton linkTo="me" buttonText="Me." />
      <NavButton linkTo="get-in-touch" buttonText="Get In Touch." />
    </nav>
  );
};

export default NavBar;
