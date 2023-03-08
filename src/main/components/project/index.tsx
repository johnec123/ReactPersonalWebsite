import { ImageList, ImageListItem } from "@mui/material";
import React from "react";
import MapOne from "../../../assets/images/MapOne.jpg";
import MapTwo from "../../../assets/images/MapTwo.jpg";
import WearOSScreen from "../../../assets/images/WearOSScreen.png";
import WearOSScreenshot from "../../../assets/images/WearOSScreenshot.png";

const data = [
  {
    heading: "Smartwatch Outdoors Application",
    subHeading: "Undergraduate Project",
    info: "Determining the location on the Irish National Grid is an issue many people who enjoy outdoor activities such as mountaineering encounter. The problem arises when with the use of an ordnance survey map the exact location of the user cannot be determined. This project aims to develop an application to run on Wear OS. The applications is developed on Android Studio with the use of the Android Studio Emulator along with a physical smartwatch. The main goal of the application is to have the capabilities to convert the GPS location coordinates to the coordinates used in the Irish National Grid reference system. Other features are included in the application such as a navigational feature that can determine the distance from a destination.",
    images: [
      {
        src: MapOne,
        title: "Map One",
      },
      {
        src: WearOSScreen,
        title: "WearOS Screen",
      },
      {
        src: MapTwo,
        title: "Map Two",
      },
      {
        src: WearOSScreenshot,
        title: "WearOS Screenshot",
      },
    ],
  },
  {
    heading: "First Wesbsite",
    subHeading: "2020",
    info: "After I graduated college I decided to try and make my first website while I was in search of my first engineering job. With my beginner experience from university and a willingness to learn I started looking around online for examples.I found one where I took the basic concepts from and created my own. Looking back now I'm happy with the content of the website but  the quality of code is not of a good standard.  But everyone has to start somewhere, hopefully somebody can get some inspiration from this to just start and put out some work. It will improve over time you just got to start.",
  },
  {
    heading: "New Website",
    subHeading: "2023",
    info: "Welcome to my personal website! This site was built using React, a popular JavaScript library for building user interfaces. Throughout the development process, I faced various challenges such as designing a responsive layout and implementing certain features, but with persistence and problem-solving, I was able to overcome them. On this page, you'll find more details about the tools and technologies I used to build this site, as well as some screenshots of its development. Thank you for visiting and please feel free to explore my other projects!",
    tech: [
      {
        name: "React",
        use: "Frontend Framework",
      },
      {
        name: "Typescript",
        use: "Coding Language",
      },
      {
        name: "Github",
        use: "Source Control",
      },
      {
        name: "AWS Amplify",
        use: "Hosting Platform",
      },
    ],
  },
];

export interface ProjectProps {
  projectHeading: string;
}

const Project: React.FC<ProjectProps> = ({ projectHeading }) => {
  const filteredData = data.filter(({ heading }) => heading === projectHeading);
  const itemData = filteredData[0];
  return (
    <div>
      <h1>{itemData.heading}</h1>
      <h2>{itemData.subHeading}</h2>
      <p>{itemData.info}</p>
      {itemData.images && (
        <ImageList variant="standard" cols={4} gap={8}>
          {itemData.images.map((image: any) => (
            <ImageListItem key={image.src}>
              <img
                src={`${image.src}?w=248&fit=crop&auto=format`}
                srcSet={`${image.src}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={image.title}
              ></img>
            </ImageListItem>
          ))}
        </ImageList>
      )}
    </div>
  );
};

export default Project;
