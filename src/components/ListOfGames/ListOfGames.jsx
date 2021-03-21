import React, { useState, useEffect } from "react";
import GameCard from "../GameCard/GameCard";
import "../ListOfGames/listOfGames.scss";

const ListOfGames = ({ changePage, changeGame }) => {
  const [gameList, setGameList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    console.log("Use effect");
    getData().then((result) => {
      setGameList(result);
    });
  }, [page]);

  const getData = async () => {
    try {
      const res = await fetch(`http://localhost:3000/posts?_page=${page}`);
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>LIST OF GAMES {page}</h1>
      <div className="movie">
        {gameList.map((game) => {
          return (
            <GameCard
              key={game.id}
              changeGame={changeGame}
              changePage={changePage}
              game={game}
            />
          );
        })}
        <button onClick={() => setPage(page - 1)}>Previous</button>
        <button onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </div>
  );
};

export default ListOfGames;
