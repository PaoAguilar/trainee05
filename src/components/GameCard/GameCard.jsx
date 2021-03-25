import React from 'react';

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
      <img alt="movie" src={game.image} />
      <div className="movie__card-body">
        <p>{game.title}</p>
        <p>{game.createDate}</p>
      </div>
    </div>
  );
};

export default GameCard;
