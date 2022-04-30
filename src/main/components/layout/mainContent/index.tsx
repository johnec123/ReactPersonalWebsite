import React from "react";
import { Route, Routes } from "react-router-dom";
import GetInTouch from "../../../pages/getInTouch";
import Home from "../../../pages/home";
import Me from "../../../pages/me";
import Work from "../../../pages/work";

export interface MainContentProps {}

const MainContent: React.FC<MainContentProps> = () => {
  console.log("test");
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="work" element={<Work />}></Route>
      <Route path="me" element={<Me />} />
      <Route path="get-in-touch" element={<GetInTouch />} />
    </Routes>
  );
};

export default MainContent;
