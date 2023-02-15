import "./styles.css";

import React from "react";
import CardBlock from "../../components/cardBlock";
import graduationPic from "../../../assets/images/Graduation.jpg";
import hikePic from "../../../assets/images/Hike.jpg";
import trophyPic from "../../../assets/images/Trophy.jpg";
import fullStackPic from "../../../assets/images/Computer.png";

const Me: React.FC = () => {
  return (
    <div className="me-wrapper">
      <CardBlock headerText="Hi Im John" />
      <CardBlock
        headerText="How I got where we are now"
        image={graduationPic}
      />
      <CardBlock headerText="Random fun facts" image={hikePic} />
      <CardBlock headerText="Core values" image={trophyPic} />
      <CardBlock headerText="Training and personality" image={fullStackPic} />
    </div>
  );
};

export default Me;
