import React, { useState, useEffect, useCallback } from 'react';
import './gameDetail.scss';

const GameDetail = ({ game }) => {
  const [gameComment, setGameComment] = useState([]);

  const getComments = useCallback(async () => {
    try {
      const res = await fetch(
        `http://localhost:3000/comments/?postId=${game.id}`
      );
      const data = await res.json();
      // console.log(data);
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  });
  useEffect(() => {
    getComments().then((result) => {
      setGameComment(result);
    });
  }, [getComments]);

  return (
    <div>
      <h1>
        DETAILS OF
        {game.title}
      </h1>
      <div className="game">
        <div className="game__container">
          <h1 className="game__title">{game.title}</h1>
          <h2 className="game__subtitle">{game.subTitle}</h2>
          <img className="game__image" alt="" src={game.image} />
          <div className="game__date">
            <h5>
              Date of creation:
              {game.createDate}
            </h5>
          </div>
          <br />
          <div>
            <h5>{game.body}</h5>
          </div>
          <div>
            <br />
            <h4>Comments:</h4>
            {gameComment.map((result) => {
              return <h5 key={result.id}>{result.comment}</h5>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetail;
