import React from "react";
import ProjectCard from "../../components/projectCard";
import firstWebsite from "../../assets/firstWebsite.png";
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
        title="First Website"
        projectNo={1}
        headerImage={firstWebsite}
        route="first-website"
      />
      <ProjectCard
        title="First Website"
        projectNo={1}
        headerImage={firstWebsite}
        route="first-website"
      />
      <ProjectCard
        title="First Website"
        projectNo={1}
        headerImage={firstWebsite}
        route="first-website"
      />
      <ProjectCard
        title="First Website"
        projectNo={1}
        headerImage={firstWebsite}
        route="first-website"
      />
      <ProjectCard
        title="First Website"
        projectNo={1}
        headerImage={firstWebsite}
        route="first-website"
      />
    </Grid>
  );
};

export default Work;
