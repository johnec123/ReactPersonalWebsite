import React from "react";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <div>
      <div>NavBar</div>
      <nav>
        <Link to="/">John.</Link>

        <Link to="/work">Work.</Link>

        <Link to="/me">Me.</Link>

        <Link to="/get-in-touch">Get In Touch.</Link>
      </nav>
    </div>
  );
};

export default NavBar;
