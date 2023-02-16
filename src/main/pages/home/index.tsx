import "./styles.css";

import React from "react";
import CardBlock from "../../components/cardBlock";
import personalPic from "../../../assets/images/Personal.jpg";

const Home: React.FC = () => {
  return (
    <div className="me-wrapper homeBlock">
      <CardBlock
        headerText="Hey, Im John"
        bodyText="A Full Stack Software Engineer with a passion for sports"
        image={personalPic}
        imageFirst={true}
      ></CardBlock>
    </div>
  );
};

export default Home;
