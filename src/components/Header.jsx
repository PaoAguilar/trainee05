import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { useAuth } from './context/AuthContext';
import '../styles/header.scss';

const Header = ({ changePage }) => {
  const { jwt } = useAuth();
  return (
    <header className="header">
      {jwt && <button type="button">Logout</button>}
      <div
        onClick={() => {
          if (jwt) changePage('Home');
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
            if (jwt) changePage('ListOfGames');
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

Header.propTypes = {
  changePage: PropTypes.func.isRequired,
};

export default memo(Header);
