import React from 'react';
import PropTypes from 'prop-types';
import '../styles/home.scss';

const Home = ({ changePage }) => {
  return (
    <>
      <div className="home-logo" />
      <div className="wrap-text">
        <h1>A new game experience waiting to be discovered</h1>
      </div>
      <div className="movies-button">
        <button
          type="button"
          onClick={() => {
            changePage('ListOfGames');
          }}
        >
          Go to games
        </button>
      </div>
    </>
  );
};

Home.propTypes = {
  changePage: PropTypes.func.isRequired,
};

export default Home;
