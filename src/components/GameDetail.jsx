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
            <h5>Year of release: {game.release_year}</h5>
          </div>
          <div className="game__date">
            <h5>Genre: {game.genre.name}</h5>
          </div>
          <div className="game__date">
            <h5>Price: {game.price}</h5>
          </div>
          <div>
            <br />
            <h4>Comments:</h4>
            {gameComment.map((result) => {
              return <h5 key={result.id}>{result.body}</h5>;
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
