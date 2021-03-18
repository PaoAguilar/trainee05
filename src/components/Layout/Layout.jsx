import "./layout.scss";
import React from "react";
import Header from "../Header/Header";

const Layout = ({ children }) => {
  return (
    <div className="content">
      <Header />
      <div className="content__wrap-info">{children}</div>
    </div>
  );
};

export default Layout;
