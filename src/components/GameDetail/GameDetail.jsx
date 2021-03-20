import React from "react";

const GameDetail = ({ game }) => {
  return (
    <div>
      <h1>GAME DETAIL</h1>
      <div className="movie__container">
        <img alt="movie" src={game.image} />
        <div className="movie__card-body">
          <p>{game.title}</p>
          <p>{game.createDate}</p>
        </div>
      </div>
    </div>
  );
};

export default GameDetail;
