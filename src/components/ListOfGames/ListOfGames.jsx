import React, { useState, useEffect } from "react";
import "../ListOfGames/listOfGames.scss";

const ListOfGames = () => {
  const [game, setGame] = useState([]);

  useEffect(() => {
    console.log("Use effect");
    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await fetch("http://localhost:3000/posts/");
      const data = await res.json();
      setGame(data);
      console.log(data[0].title);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>LIST OF GAMES</h1>
      <div className="movie">
        {game.map((item, index) => (
          <div key={index} className="movie__container">
            <img alt="movie" src={item.image} />
            <div className="movie__card-body">
              <p>{item.title}</p>
            </div>
          </div>
          //   <li key={item.id}>
          //     {item.title} <img src={item.image} />
          //   </li>
        ))}
      </div>
    </div>
  );
};

export default ListOfGames;
