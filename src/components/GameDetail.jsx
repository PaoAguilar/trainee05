import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getComments } from '../config/actions';
import '../styles/gameDetail.scss';

const GameDetail = ({ game }) => {
  const [gameComment, setGameComment] = useState([]);

  useEffect(() => {
    getComments(game.id).then((result) => {
      setGameComment(result);
    });
  }, []);

  return (
    <div>
      <h1>DETAILS OF {game.name}</h1>
      <div className="game">
        <div className="game__container">
          <h1 className="game__title">{game.name}</h1>
          <h2 className="game__subtitle">{game.genre.name}</h2>
          <img className="game__image" alt="" src={game.cover_art.url} />
          <div className="game__date">
            <h4>Year of release: {game.release_year}</h4>
          </div>
          <div className="game__date">
            <h4>Genre: {game.genre.name}</h4>
          </div>
          <div className="game__date">
            <h4>Price: {game.price}</h4>
          </div>
          <div className="comments">
            <br />
            <h3>Comments:</h3>
            {gameComment.map((result) => {
              return (
                <div className="comments__all" key={result.id}>
                  <h4>
                    <span>Username:</span> {result.user.username}
                  </h4>
                  <h4>Comment: {result.body}</h4>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

GameDetail.propTypes = {
  game: PropTypes.object.isRequired,
};

export default GameDetail;
