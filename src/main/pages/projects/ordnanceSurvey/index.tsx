import { ImageList, ImageListItem } from "@mui/material";
import React from "react";
import MapOne from "../../../../assets/images/MapOne.jpg";
import MapTwo from "../../../../assets/images/MapTwo.jpg";
import WearOSScreen from "../../../../assets/images/WearOSScreen.png";
import WearOSScreenshot from "../../../../assets/images/WearOSScreenshot.png";

const itemData = {
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
};

const OrdnanceSurvey: React.FC = () => {
  return (
    <div>
      <h1>{itemData.heading}</h1>
      <h2>{itemData.subHeading}</h2>
      <p>{itemData.info}</p>
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
    </div>
  );
};

export default OrdnanceSurvey;
