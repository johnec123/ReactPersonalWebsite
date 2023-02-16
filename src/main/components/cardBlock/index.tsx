import "./styles.css";

import React from "react";

export interface CardBlockProps {
  headerText?: string;
  bodyText?: any;
  image?: string | undefined;
  imageFirst?: boolean;
}

const CardBlock: React.FC<CardBlockProps> = ({
  headerText,
  bodyText,
  image,
  imageFirst,
}) => {
  return (
    <div className="cardBlock">
      {imageFirst && image && <img src={image} alt="missing"></img>}
      <div className="cardContent">
        <div className="cardWriting">
          <div className="header">{headerText}</div>
          <div className="body">{bodyText}</div>
        </div>
      </div>
      {!imageFirst && image && <img src={image} alt="missing"></img>}
    </div>
  );
};

export default CardBlock;
