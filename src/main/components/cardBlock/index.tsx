import "./styles.css";

import { Card } from "@mui/material";
import React from "react";

export interface CardBlockProps {
  headerText: string;
  bodyText?: string;
  image?: string | undefined;
}

const CardBlock: React.FC<CardBlockProps> = ({
  headerText,
  bodyText,
  image,
}) => {
  return (
    <Card variant="outlined" className="cardBlock">
      <div className="cardContent">
        <div className="cardWriting">
          <div>{headerText}</div>
          <div>{bodyText}</div>
        </div>
        {image && <img src={image} alt="missing"></img>}
      </div>
    </Card>
  );
};

export default CardBlock;
