import React from "react";
import "../Header/header.scss";

const Header = ({ changePage }) => {
  return (
    <header className="header">
      <div
        onClick={() => {
          changePage("Home");
        }}
        className="header__logo"
      ></div>
      <nav>
        <h1>GAME ZONE</h1>
      </nav>
      <div className="header__link">
        <button
          onClick={() => {
            changePage("ListOfGames");
          }}
        >
          LIST
        </button>
        <button>CONTACT US</button>
        <button>CATEGORIES</button>
      </div>
    </header>
  );
};

export default Header;
