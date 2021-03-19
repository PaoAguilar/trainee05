import React, { useEffect } from "react";

const ListOfGames = () => {
  useEffect(() => {
    console.log("Use effect");
  });
  return (
    <div>
      <h1>HI LIST OF GAMES</h1>
    </div>
  );
};

export default ListOfGames;
