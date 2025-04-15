import React from "react";
import LeftSideMenu from "../components/LeftSideMenu";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import "../SCSS/Layout.scss"

const Layout = () => {
  return (
    <div className="background">
      <div className="contener">
        <Header />
        <div className="body">
          <LeftSideMenu />
          <div className="main-content">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
