import React from 'react';
import './header.scss';

const Header = ({ changePage }) => {
  return (
    <header className="header">
      <div
        onClick={() => {
          changePage('Home');
        }}
        className="header__logo"
      />
      <nav>
        <h1>GAME ZONE</h1>
      </nav>
      <div className="header__link">
        <button
          type="button"
          onClick={() => {
            changePage('ListOfGames');
          }}
        >
          LIST
        </button>
        <button type="button">ABOUT US</button>
        <button type="button">CONTACT US</button>
      </div>
    </header>
  );
};

export default Header;
