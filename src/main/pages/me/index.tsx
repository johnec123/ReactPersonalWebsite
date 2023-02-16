import "./styles.css";

import React from "react";
import CardBlock from "../../components/cardBlock";
import graduationPic from "../../../assets/images/Graduation.jpg";
import hikePic from "../../../assets/images/Hike.jpg";
import trophyPic from "../../../assets/images/Trophy.jpg";
import cartoonPic from "../../../assets/images/Cartoon.png";

const Me: React.FC = () => {
  return (
    <div className="me-wrapper">
      <CardBlock
        headerText="How I got where we are now"
        bodyText="I grew up on a Farm in a family of seven. I was always "
        image={cartoonPic}
        imageFirst={false}
      />
      <CardBlock
        headerText="Random fun facts"
        bodyText={
          <ul>
            <li>Crossfit</li>
            <li>GAA</li>
            <li>Farm</li>
          </ul>
        }
        image={hikePic}
        imageFirst={true}
      />
      <CardBlock
        headerText="Core values"
        bodyText="Humility"
        image={trophyPic}
        imageFirst={false}
      />
      <CardBlock
        headerText="Training and skills"
        bodyText={
          <ul>
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
          </ul>
        }
        image={graduationPic}
        imageFirst={true}
      />
    </div>
  );
};

export default Me;
