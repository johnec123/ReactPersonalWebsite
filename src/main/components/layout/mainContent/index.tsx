import React from "react";
import { Route, Routes } from "react-router-dom";
import GetInTouch from "../../../pages/getInTouch";
import Home from "../../../pages/home";
import Me from "../../../pages/me";
import Projects from "../../../pages/projects";
import WebsiteOne from "../../../pages/projects/websiteOne";
import WebsiteTwo from "../../../pages/projects/websiteTwo";
import InstaPoster from "../../../pages/projects/instaPoster";
import OrdnanceSurvey from "../../../pages/projects/ordnanceSurvey";

export interface MainContentProps {}

const MainContent: React.FC<MainContentProps> = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="projects" element={<Projects />}></Route>
      <Route path="me" element={<Me />} />
      <Route path="get-in-touch" element={<GetInTouch />} />
      <Route path="projects/first-website" element={<WebsiteOne />} />
      <Route path="projects/new-website" element={<WebsiteTwo />} />
      <Route path="projects/insta-poster" element={<InstaPoster />} />
      <Route path="projects/ordnance-survey" element={<OrdnanceSurvey />} />
    </Routes>
  );
};

export default MainContent;
