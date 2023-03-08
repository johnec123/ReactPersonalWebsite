import "./styles.css";

import React from "react";
import NavBar from "./navBar";
import SideBar from "./sideBar";
import MainContent from "./mainContent";
import Footer from "./footer";

export interface LayoutProps {}

const Layout: React.FC<LayoutProps> = () => {
  return (
    <div className="layout-wrapper">
      <div className="layout-aside layout-sideBar">
        <SideBar />
      </div>
      <div className="layout-aside layout-rightSide">
        <div className="layout-navBar">
          <NavBar />
        </div>

        <div className="layout-mainContent">
          <MainContent />
        </div>
        <div className="layout-footer">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
