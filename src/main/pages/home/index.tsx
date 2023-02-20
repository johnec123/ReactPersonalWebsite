import "./styles.css";

import React from "react";
import CardBlock from "../../components/cardBlock";
import personalPic from "../../../assets/images/Personal.jpg";

const Home: React.FC = () => {
  return (
    <div className="homeBlock">
      <CardBlock
        headerText="Hey, Im John"
        bodyText="A software engineer with a passion for creating elegant solutions to complex problems."
        image={personalPic}
      ></CardBlock>
    </div>
  );
};

export default Home;
