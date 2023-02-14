import "./styles.css";

import React from "react";

export interface HomeBlockProps {
  headerText: string;
  bodyText?: string;
  image?: string | undefined;
}

const CardBlock: React.FC<HomeBlockProps> = ({
  headerText,
  bodyText,
  image,
}) => {
  return (
    <div className="homeBlock">
      {image && <img src={image} alt="missing"></img>}
      <div className="cardContent">
        <div className="cardWriting">
          <div className="header">{headerText}</div>
          <div className="body">{bodyText}</div>
        </div>
      </div>
    </div>
  );
};

export default CardBlock;
