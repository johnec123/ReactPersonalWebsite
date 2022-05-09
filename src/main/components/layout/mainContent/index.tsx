import React from "react";
import { Route, Routes } from "react-router-dom";
import GetInTouch from "../../../pages/getInTouch";
import Home from "../../../pages/home";
import Me from "../../../pages/me";
import Work from "../../../pages/work";
import FirstWebsite from "../../firstWebsite";
import NewProjectTemplate from "../../newProjectTemplate";

const MainContent: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="work" element={<Work />}></Route>
      <Route path="me" element={<Me />} />
      <Route path="get-in-touch" element={<GetInTouch />} />
      <Route path="work/first-website" element={<FirstWebsite />} />
      <Route path="work/new-project" element={<NewProjectTemplate />} />
    </Routes>
  );
};

export default MainContent;
