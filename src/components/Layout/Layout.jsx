import "./layout.scss";
import React from "react";
import Header from "../Header/Header";

const Layout = () => {
  return (
    <div className="content">
      <div className="content__wrap-info">
        <Header />
      </div>
    </div>
  );
};

export default Layout;
