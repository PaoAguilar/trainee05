import React from "react";
import "../../components/GameDetail/gameDetail.scss";

const GameDetail = ({ game }) => {
  return (
    <div>
      <h1>GAME DETAIL</h1>
      <div className="game">
        <div className="game__container">
          <h1 className="game__title">{game.title}</h1>
          <h2 className="game__subtitle">{game.subTitle}</h2>
          <img className="game__image" alt="" src={game.image} />
          <div className="game__date">
            <h5>Date of creation: {game.createDate}</h5>
          </div>
          <br />
          <div>
            <h5>{game.body}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetail;
