import React from "react";
import NavButton from "../../components/navButton";

const Projects: React.FC = () => {
  return (
    <div>
      <NavButton linkTo="first-website" buttonText="First Website." />
      <NavButton linkTo="new-website" buttonText="New Website." />
      <NavButton linkTo="insta-poster" buttonText="Insta Poster." />
      <NavButton linkTo="ordnance-survey" buttonText="Ordnance Survey." />
    </div>
  );
};

export default Projects;
