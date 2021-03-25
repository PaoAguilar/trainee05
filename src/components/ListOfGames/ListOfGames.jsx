import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import GameCard from '../GameCard/GameCard';

import './listOfGames.scss';

const ListOfGames = ({ changePage, changeGame }) => {
  const [gameList, setGameList] = useState([]);
  const [page, setPage] = useState(1);

  const getGames = useCallback(async () => {
    try {
      const res = await fetch(
        `https://trainee-gamerbox.herokuapp.com/games?_start=${page}&_limit=10`
      );
      const data = await res.json();
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  });

  useEffect(() => {
    getGames().then((result) => {
      setGameList(result);
    });
  }, [page]);

  return (
    <div>
      <h1>
        LIST OF GAMES (page
        {page})
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
            if (page > 1) {
              setPage(page - 1);
            }
          }}
        >
          Previous
        </button>
        <button
          type="button"
          className="button-container__next"
          onClick={() => {
            if (page >= 1 && page < 2) {
              setPage(page + 1);
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
