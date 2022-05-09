import React from "react";
import ProjectCard from "../../components/projectCard";
import firstWebsite from "../../assets/firstWebsite.png";
import insertImageHere from "../../assets/insertImageHere.png";
import { Grid } from "@mui/material";

const Work: React.FC = () => {
  return (
    <Grid container spacing={3}>
      <ProjectCard
        title="First Website"
        projectNo={1}
        headerImage={firstWebsite}
        route="first-website"
      />
      <ProjectCard
        title="Future John's Project"
        projectNo={2}
        headerImage={insertImageHere}
        route="new-project"
      />
      <ProjectCard
        title="Future John's Project"
        projectNo={3}
        headerImage={insertImageHere}
        route="new-project"
      />
      <ProjectCard
        title="Future John's Project"
        projectNo={4}
        headerImage={insertImageHere}
        route="new-project"
      />
      <ProjectCard
        title="Future John's Project"
        projectNo={5}
        headerImage={insertImageHere}
        route="new-project"
      />
      <ProjectCard
        title="Future John's Project"
        projectNo={6}
        headerImage={insertImageHere}
        route="new-project"
      />
      <ProjectCard
        title="Future John's Project"
        projectNo={7}
        headerImage={insertImageHere}
        route="new-project"
      />
      <ProjectCard
        title="Future John's Project"
        projectNo={8}
        headerImage={insertImageHere}
        route="new-project"
      />
      <ProjectCard
        title="Future John's Project"
        projectNo={9}
        headerImage={insertImageHere}
        route="new-project"
      />
    </Grid>
  );
};

export default Work;
