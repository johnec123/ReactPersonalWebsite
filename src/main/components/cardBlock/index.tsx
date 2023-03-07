import "./styles.css";

import React from "react";

export interface CardBlockProps {
  headerText?: string;
  bodyText?: any;
  image?: string | undefined;
}

const CardBlock: React.FC<CardBlockProps> = ({
  headerText,
  bodyText,
  image,
}) => {
  return (
    <div className="cardBlock image">
      <div>{image && <img src={image} alt="missing"></img>}</div>
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
