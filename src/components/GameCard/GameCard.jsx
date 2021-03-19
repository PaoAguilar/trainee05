import React from "react";

const GameCard = ({ game, changePage }) => {
  return (
    <div>
      {game.map((item) => (
        <div
          onClick={() => {
            changePage("GameDetail");
          }}
          key={item.id}
          className="movie__container"
        >
          <img alt="movie" src={item.image} />
          <div className="movie__card-body">
            <p>{item.title}</p>
            <p>{item.createDate}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GameCard;
