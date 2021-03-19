import "./layout.scss";
import React from "react";
import Header from "../Header/Header";

const Layout = ({ children, changePage }) => {
  return (
    <div className="content">
      <Header changePage={changePage} />
      <div className="content__wrap-info">{children}</div>
    </div>
  );
};

export default Layout;
