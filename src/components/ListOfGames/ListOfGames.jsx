import React, { useState, useEffect } from "react";
import GameCard from "../GameCard/GameCard";
import "../ListOfGames/listOfGames.scss";

const ListOfGames = ({ changePage }) => {
  const [game, setGame] = useState([]);
  // const [gameDetail, setGameDetail] = useState("ListOfGame");

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
        <GameCard changePage={changePage} game={game} />
      </div>
    </div>
  );
};

export default ListOfGames;
