import React from "react";
import HomeBlock from "../../components/homeBlock";
import personalPic from "../../../assets/images/Personal.jpg";

const Home: React.FC = () => {
  return (
    <div className="me-wrapper">
      <HomeBlock
        headerText="Hey, Im John"
        bodyText="A Full Stack Software Engineer with a passion for sports"
        image={personalPic}
      ></HomeBlock>
    </div>
  );
};

export default Home;
