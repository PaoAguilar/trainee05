import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { getComments, createComment } from '../config/actions';
import '../styles/gameDetail.scss';

const GameDetail = ({ game }) => {
  const [gameComment, setGameComment] = useState([]);

  useEffect(() => {
    getComments(game.id).then((result) => {
      setGameComment(result);
    });
  }, []);

  const bodyRef = useRef('');
  const handleSubmit = (e) => {
    e.preventDefault();
    const body = bodyRef.current.value;
    createComment(game.id, body);
  };

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
                    <span>Name:</span> {result.user.firstName}
                    {result.user.lastName}
                  </h4>
                  <h4>Comment: {result.body}</h4>
                </div>
              );
            })}
          </div>
          <br />
          <form className="comment-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <div className="input-group">
                <h3>New Comment</h3>
                <br />
                <input
                  id="comment-text"
                  placeholder="Write the new comment here"
                  type="text"
                  className="input"
                  ref={bodyRef}
                />
              </div>
              <span className="user-advertising" />
            </div>
            <button type="submit" className="create-button">
              Add comment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

GameDetail.propTypes = {
  game: PropTypes.object,
};

export default GameDetail;
