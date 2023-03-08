import {
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";
import React from "react";
import firstWebsitePic from "../../../assets/images/FirstWebsite.png";
import ordnanceSurveyPic from "../../../assets/images/OrdnanceSurvey.jpg";
import newWebsitePic from "../../../assets/images/NewWebsite.png";
import { ArrowForwardIos } from "@mui/icons-material";
import { Link } from "react-router-dom";

const itemData = [
  {
    title: "First Website",
    img: firstWebsitePic,
    linkTo: "first-website",
  },
  {
    title: "Ordnance Survey App",
    img: ordnanceSurveyPic,
    linkTo: "ordnance-survey",
  },
  {
    title: "Updated Website",
    img: newWebsitePic,
    linkTo: "new-website",
  },
];

const Projects: React.FC = () => {
  return (
    <div>
      <ImageList variant="standard" cols={3} gap={0}>
        {itemData.map((item: any) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              position="bottom"
              title={item.title}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${item.title}`}
                  component={Link}
                  to={item.linkTo}
                >
                  <ArrowForwardIos />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};

export default Projects;
