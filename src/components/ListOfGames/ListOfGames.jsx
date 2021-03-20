import React, { useState, useEffect } from "react";
import GameCard from "../GameCard/GameCard";
import "../ListOfGames/listOfGames.scss";

const ListOfGames = ({ changePage, changeGame }) => {
  const [gameList, setGameList] = useState([]);
  const [page, setPage] = useState();

  useEffect(() => {
    console.log("Use effect");
    getData().then((result) => {
      setGameList(result);
    });
  }, []);

  const getData = async () => {
    try {
      const res = await fetch("http://localhost:3000/posts?_page=1");
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>LIST OF GAMES</h1>
      <div className="movie">
        {gameList.map((game) => {
          return (
            <GameCard
              changeGame={changeGame}
              changePage={changePage}
              game={game}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ListOfGames;
