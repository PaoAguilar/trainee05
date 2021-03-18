import React from "react";
import "../Header/header.scss";
const Header = () => {
  return (
    <header className="header">
      <div className="header__logo"></div>
      <nav>
        <h1>GAME ZONE</h1>
      </nav>
      <div className="header__link">
        <a href="">ABOUT US</a>
        <a href="">CONTACT US</a>
        <a href="">CATEGORIES</a>
      </div>
    </header>
  );
};

export default Header;
