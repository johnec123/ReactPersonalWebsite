import React from "react";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <div>
      <div>NavBar</div>
      <nav>
        <li>
          <Link to="/">John.</Link>
        </li>
        <li>
          <Link to="/work">Work.</Link>
        </li>
        <li>
          <Link to="/me">Me.</Link>
        </li>
        <li>
          <Link to="/get-in-touch">Get In Touch.</Link>
        </li>
      </nav>
    </div>
  );
};

export default NavBar;
