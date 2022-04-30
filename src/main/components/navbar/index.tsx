import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <div>
      <div>Navbar</div>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </div>
  );
};

export default Navbar;
