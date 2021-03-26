import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import GameCard from '../GameCard/GameCard';
import { getGames } from '../../config/actions';
import './listOfGames.scss';

const ListOfGames = ({ changePage, changeGame }) => {
  const [gameList, setGameList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const abortController = new AbortController();
    getGames(currentPage).then((result) => {
      setGameList(result);
    });
    return () => {
      abortController.abort();
    };
  }, [currentPage]);

  return (
    <div>
      <h1>
        LIST OF GAMES (page
        {currentPage})
      </h1>
      <div className="movie">
        {gameList.map((game) => {
          return (
            <GameCard
              key={game.id}
              changeGame={changeGame}
              changePage={changePage}
              game={game}
            />
          );
        })}
      </div>
      <div className="button-container">
        <button
          type="button"
          className="button-container__previous"
          onClick={() => {
            if (currentPage > 1) {
              setCurrentPage(currentPage - 1);
            }
          }}
        >
          Previous
        </button>
        <button
          type="button"
          className="button-container__next"
          onClick={() => {
            if (currentPage >= 1 && currentPage < 2) {
              setCurrentPage(currentPage + 1);
            }
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

ListOfGames.propTypes = {
  changePage: PropTypes.func.isRequired,
  changeGame: PropTypes.func.isRequired,
};

export default ListOfGames;
