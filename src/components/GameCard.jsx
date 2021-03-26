import React from 'react';
import PropTypes from 'prop-types';

const GameCard = ({ game, changePage, changeGame }) => {
  return (
    <div
      onClick={() => {
        changeGame(game);
        changePage('GameDetail');
      }}
      key={game.id}
      className="movie__container"
    >
      <img alt="movie" src={game.cover_art.url} />
      <div className="movie__card-body">
        <p>{game.name}</p>
        <p>{game.release_year}</p>
      </div>
    </div>
  );
};

GameCard.propTypes = {
  game: PropTypes.object.isRequired,
  changePage: PropTypes.func.isRequired,
  changeGame: PropTypes.func.isRequired,
};

export default GameCard;
