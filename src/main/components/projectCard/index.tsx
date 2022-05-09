import { CardActionArea, Grid, Paper } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export interface ProjectCardProps {
  title: string;
  projectNo: number;
  headerImage: any;
  route: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  projectNo,
  headerImage,
  route,
}) => {
  return (
    <Grid item>
      <Paper>
        <CardActionArea component={Link} to={route}>
          <img src={headerImage} alt="test" width="300" height="100" />
          <h1>{title}</h1>
          <h2>{projectNo}</h2>
        </CardActionArea>
      </Paper>
    </Grid>
  );
};

export default ProjectCard;
